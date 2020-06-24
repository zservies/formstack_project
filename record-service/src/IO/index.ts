const aws = require("aws-sdk");
const dynamoDB = new aws.DynamoDB.DocumentClient();

export function createRecord(id: string, albumName: string, artist: string) {
  const params = {
    TableName: "vinyl-records2",
    Item: {
      id,
      albumName,
      artist,
    },
  };
  return dynamoDB
    .put(params)
    .promise()
    .then((res) => res)
    .catch((err) => err);
}

export function getRecords() {
  const params = {
    TableName: "vinyl-records2",
    Select: "ALL_ATTRIBUTES",
  };
  return dynamoDB
    .scan(params)
    .promise()
    .then((res) => res)
    .catch((err) => err);
}

export function deleteRecord(record) {
  const params = {
    TableName: "vinyl-records2",
    Key: record,
  };
  return dynamoDB
    .delete(params)
    .promise()
    .then((res) => res)
    .catch((err) => err);
}
