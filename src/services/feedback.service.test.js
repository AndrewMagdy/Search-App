import { normalizeResponse } from "./feedback.service";

const response = [
  {
    id: "aabd4135-76cb-43bc-914f-f6f8229678fb",
    answer: "yes",
    feedback: "Awesome App!"
  },
  {
    id: "6b58fed0-4e6d-472e-ab02-3b65b4feed8b",
    answer: "yes"
  },
  {
    id: "d655b24d-9a5a-4fc7-9e08-032fe7638e64",
    answer: "no",
    feedback: "Naa !"
  }
];

describe("FeedBack Service", () => {
  it("Test normalizeResponse()", () => {
    expect(normalizeResponse(response)).toEqual({ yes: 2, no: 1 });
  });
});
