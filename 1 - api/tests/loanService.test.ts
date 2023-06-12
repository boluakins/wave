import axios, { AxiosResponse } from "axios";
import { getRepaymentDetails } from "../src/services/loanService";
import MockAdapter from "axios-mock-adapter";
import { liveRateUrl } from "../src/config";

describe("expectedData", () => {
  let mock: MockAdapter;
  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  afterAll(() => {
    mock.restore();
  });
  it("checks if API returns expected data", async () => {
    mock
      .onGet(liveRateUrl)
      .reply(200, response);
    const results = await getRepaymentDetails(100, 10, 2);
    expect(results.success).toEqual(true);
  });
});

let response: AxiosResponse = {
  data: {
    result: "success",
    documentation: "https://www.exchangerate-api.com/docs",
    terms_of_use: "https://www.exchangerate-api.com/terms",
    time_last_update_unix: 1686528002,
    time_last_update_utc: "Sun, 11 Jun 2023 00:00:02 +0000",
    time_next_update_unix: 1686614402,
    time_next_update_utc: "Mon, 12 Jun 2023 00:00:02 +0000",
    base_code: "USD",
    conversion_rates: {
      USD: 1,
      NAD: 18.7272,
      NGN: 462.091,
      NIO: 36.525,
    },
  },
  status: 200,
  statusText: "OK",
  headers: {},
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    },
    // @ts-ignore
    headers: {},
    method: "get",
  },
};
