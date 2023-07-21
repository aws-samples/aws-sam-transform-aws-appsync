import { util } from "@aws-appsync/utils";

/**
 * Sends a request to get an item with id `ctx.args.id`
 * @param {import('@aws-appsync/utils').Context} ctx the context
 * @returns {import('@aws-appsync/utils').DynamoDBGetItemRequest} the request
 */
export function request(ctx) {
  return dynamoDBGetItemRequest({ id: ctx.args.id });
}

/**
 * Returns the fetched DynamoDB item
 * @param {import('@aws-appsync/utils').Context} ctx the context
 * @returns {*} the DynamoDB item
 */
export function response(ctx) {
  return ctx.result;
}

/**
 * A helper function to get a DynamoDB item
 * @returns {import('@aws-appsync/utils').DynamoDBGetItemRequest} the request
 */
function dynamoDBGetItemRequest(key) {
  return {
    operation: "GetItem",
    key: util.dynamodb.toMapValues(key),
  };
}
