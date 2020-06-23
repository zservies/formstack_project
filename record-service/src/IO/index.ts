const aws = require('aws-sdk');
const db = new aws.DynamoDB.DocumentClient({
  region: 'us-east-2'
});

export const dynamo = {
  put: async data => {
    console.log(data.toString);
    const params = {
      TableName: 'test-table',
      Item: data
    }
    const res = await db.put(params).promise();
    return res;
  },
  get: async () => {
    const params = {
      TableName: 'test-table'
    }
    const x = await db.scan(params, (err,data)=>{
      if (err){
        return err
      } else {
        return data.Items
      }
    });
    return x;
  }
}

export const handler = {
  request: (res) => JSON.parse(res.body),
    returnSuccess: input => ({
      statusCode: 200,
      body: JSON.stringify({input}),
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,GET,PUT,OPTIONS,DELETE'
      }
    }),
    returnError: err => ({
      statusCode: 400,
      body: JSON.stringify({err}),
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,GET,PUT,OPTIONS,DELETE'
      }
    })
};

export default {
  handler: handler,
  db: dynamo,
  events: {}
}