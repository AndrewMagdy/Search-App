import { State } from "../types";

const initialState: State = {
  itemsByType: {
    people: {
      isFetching: false,
      items: [],
      query: "",
      pageNum: 1
    },
    files: {
      isFetching: false,
      items: [],
      query: "",
      pageNum: 1
    },
    apps: {
      isFetching: false,
      items: [],
      query: "",
      pageNum: 1
    }
  },
  feedback: {
    count: {
      yes: 1,
      no: 1
    }
  }
};

export default initialState;
