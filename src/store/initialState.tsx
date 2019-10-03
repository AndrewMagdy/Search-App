import { State } from "../types";

const initialState: State = {
  itemsByType: {
    people: {
      isFetching: false,
      items: [],
      query: ""
    },
    files: {
      isFetching: false,
      items: [],
      query: ""
    },
    apps: {
      isFetching: false,
      items: [],
      query: ""
    }
  }
};

export default initialState;
