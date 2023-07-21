import { util } from "@aws-appsync/utils";

/**
 * Sends a request to put an previously formatted item with id `ctx.prev.result.key.id`
 * @param {import('@aws-appsync/utils').Context} ctx the context
 * @returns {import('@aws-appsync/utils').DynamoDBPutItemRequest} the request
 */
export function request(ctx) {
  const key = { id: ctx.prev.result.key.id };
  const { ...values } = ctx.prev.result.values;
  return dynamoDBPutItemRequest(key, values);
}

/**
 * Returns the created DynamoDB item
 * @param {import('@aws-appsync/utils').Context} ctx the context
 * @returns {*} the DynamoDB item
 */
export function response(ctx) {
  return ctx.result;
}

/**
 * A helper function to put a DynamoDB item
 * @returns {import('@aws-appsync/utils').DynamoDBPutItemRequest} the request
 */
function dynamoDBPutItemRequest(key, values) {
  return {
    operation: "PutItem",
    key: util.dynamodb.toMapValues(key),
    attributeValues: util.dynamodb.toMapValues(values),
  };
}
