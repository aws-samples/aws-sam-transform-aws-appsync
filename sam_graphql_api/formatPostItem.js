import { util } from "@aws-appsync/utils";

/**
 * Formats the request adding votes ups, downs and a version
 * @param {import('@aws-appsync/utils').Context} ctx the context
 * @returns {*} the enhanced request
 */
export function request(ctx) {
  const id = util.autoId();
  const { ...values } = ctx.args;
  values.ups = 1;
  values.downs = 0;
  values.version = 1;
  return {
    payload: {
      key: { id },
      values: values,
    },
  };
}

/**
 * Returns the enhanced reqeust
 * @param {import('@aws-appsync/utils').Context} ctx the context
 * @returns {*} result
 */
export function response(ctx) {
  return ctx.result;
}
