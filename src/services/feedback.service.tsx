import axios from "axios";

export const getItems = () => {
  return axios
    .get(`${process.env.REACT_APP_API_END_POINT}/feedback`)
    .then(res => res.data);
};

interface Feedback {
  answer: "yes" | "no";
}

export const normalizeResponse = (response: Array<Feedback>): any => {
  const count: { yes: number; no: number } = { yes: 0, no: 0 };

  for (let item of response) {
    count[item.answer]++;
  }
  return count;
};
