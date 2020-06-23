const aws = require("aws-sdk");
const dynamoDB = new aws.DynamoDB.DocumentClient();

export function createRecord(id: string, albumName: string, artist: string) {
  const params = {
    TableName: "vinyl-records",
    Item: {
      id,
      albumName,
      artist
    },
  };
  return dynamoDB
    .put(params)
    .promise()
    .then((res) => res)
    .catch((err) => err);
}

/** get a to-do item from the db table */
export function getRecords() {
  const params = {
    TableName: "vinyl-records",
    Select: "ALL_ATTRIBUTES",
  };
  return dynamoDB
    .scan(params)
    .promise()
    .then((res) => res)
    .catch((err) => err);
}
