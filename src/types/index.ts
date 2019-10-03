export interface State {
  itemsByType: {
    [type: string]: {
      isFetching: false;
      items: [];
      query: string;
      pageNum: number;
    };
  };
  feedback: {
    count: {
      yes: number;
      no: number;
    };
  };
}

export interface Item {
  id: string;
  headerText: string;
  primaryText: string;
  secondaryText: string;
  image: string;
}

export interface PeopleResponse {
  id: string;
  name: string;
  department: string;
  type: string;
  jobTitle: string;
  image: string;
}

export interface FilesResponse {
  id: string;
  name: string;
  type: string;
  appType: string;
  image: string;
  created: string;
}

export interface AppResponse {
  id: string;
  name: string;
  type: string;
  appType: string;
  image: string;
}
