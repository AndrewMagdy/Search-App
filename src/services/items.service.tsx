import axios from "axios";
import { Item } from "../types";

export const getItems = (
  query: string,
  type: string,
  pageNum: number,
  limit: number
) => {
  return axios
    .get(
      `${process.env.REACT_APP_API_END_POINT}/results?q=${query}&type=${type}&_page=${pageNum}&_limit=${limit}`
    )
    .then(res => res.data);
};

export const normalizeResponse = (
  response: Array<any>,
  itemType: string
): Array<Item> => {
  switch (itemType) {
    case "people":
      return response.map(item => ({
        id: item.id,
        headerText: item.name,
        primaryText: item.department,
        secondaryText: item.jobTitle,
        image: item.image
      }));

    case "files":
      return response.map(item => ({
        id: item.id,
        headerText: item.name,
        primaryText: item.appType,
        secondaryText: item.created,
        image: item.image
      }));

    case "apps":
      return response.map(item => ({
        id: item.id,
        headerText: item.name,
        primaryText: item.appType,
        secondaryText: "",
        image: item.image
      }));

    default:
      return [];
  }
};
