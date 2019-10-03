import { Action } from "redux";

const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

function createRequestTypes(base: string): { [key: string]: string } {
  return [REQUEST, SUCCESS, FAILURE].reduce(
    (acc: { [key: string]: string }, type) => {
      acc[type] = `${base}_${type}`;
      return acc;
    },
    {}
  );
}

function action(type: string, payload = {}): Action {
  return { type, ...payload };
}

export const ITEMS = createRequestTypes("ITEMS");

export const items = {
  request: (query: string, itemType: string, pageNum: Number, limit: Number) =>
    action(ITEMS[REQUEST], { query, itemType, pageNum, limit }),
  success: (query: string, response: any) =>
    action(ITEMS[SUCCESS], { query, response }),
  failure: (query: string, error: Error) =>
    action(ITEMS[FAILURE], { query, error })
};
