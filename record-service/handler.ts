import { APIGatewayEvent, Handler } from "aws-lambda";
import { createRecord, getRecords, deleteRecord } from "./src/IO";

export const response = (message: any, statusCode: number): any => {
  return {
    statusCode,
    body: JSON.stringify(message),
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
};

export const create: Handler = async (event: APIGatewayEvent) => {
  const incoming: {
    id: string;
    albumName: string;
    artist: string;
  } = JSON.parse(event.body);
  const { id, albumName, artist } = incoming;

  try {
    await createRecord(id, albumName, artist);
    return response({ created: incoming }, 201);
  } catch (err) {
    return response(err, 400);
  }
};

export const getAllRecords: Handler = async () => {
  try {
    const records = await getRecords();

    return response(records, 200);
  } catch (err) {
    return response(err, 404);
  }
};

export const deleteARecord: Handler = async (event: APIGatewayEvent) => {
  const id: { id: string } = JSON.parse(event.body);
  try {
    await deleteRecord(id);

    return response({ deleted: id }, 200);
  } catch (err) {
    return response(err, 404);
  }
};
