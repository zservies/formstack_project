import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import service from './src/service';
import io from './src/io/index';

export const create: APIGatewayProxyHandler = async (event, _context) => {
  const input = io.handler.request(event);
  const result = await service(io).create(input);
  console.log('the event: ', result.toString);
  return io.handler.returnSuccess(result);
}

export const get: APIGatewayProxyHandler = async (event, _context) => {
  const result = await service(io).get();
  return io.handler.returnSuccess(result);
}
