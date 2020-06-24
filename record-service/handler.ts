import { APIGatewayEvent, Callback, Context, Handler } from "aws-lambda";
import { createRecord, getRecords, deleteRecord } from './src/IO';


export const response = (message: any, statusCode: number): any => {
  return {
    statusCode,
    body: JSON.stringify(message),
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  };
};

/** Save an item in the to-do list */
export const create: Handler = async (
  event: APIGatewayEvent,
  context: Context
) => {
  const incoming: { id: string, albumName: string, artist: string } = JSON.parse(event.body);
  const { id, albumName, artist } = incoming;

  try {
    await createRecord(id, albumName, artist);
    return response({ created: incoming }, 201);
  } catch (err) {
    return response(err, 400);
  }
};

/** Get an item from the to-do-list table */
export const getAllRecords: Handler = async (
  event: APIGatewayEvent,
  context: Context
) => {
  // const id: string = event.pathParameters.id;

  try {
    const records = await getRecords();

    return response(records, 200);
  } catch (err) {
    return response(err, 404);
  }
};

export const deleteARecord: Handler = async (
  event: APIGatewayEvent,
  context: Context
) => {
  // const id: string = event.pathParameters.id;
  const id: { id: string } = JSON.parse(event.body)
  try {
    await deleteRecord(id);

    return response({deleted: id}, 200);
  } catch (err) {
    return response(err, 404);
  }
};

