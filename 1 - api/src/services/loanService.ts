import axios from "axios";
import { liveRateUrl } from ".././config";
import ApiResponse from "../models/ApiResponse";
import { round } from "lodash";
import Logger from "../core/Logger";

const getRates = async (): Promise<any> => {
  try {
    const response = await axios.get(liveRateUrl);
    return response.data;
  } catch (error) {
    Logger.error(error);
    return {};
  }
};

const getRepaymentDetails = async (
  principal: number,
  tenure: number,
  rate: number
): Promise<ApiResponse> => {
  let result: ApiResponse = {
    success: false,
  };
  const rates = await getRates();
  const monthlyInterestRate = rate / 100;
  const growthRate = 1 + monthlyInterestRate;
  const growthRateTenureIndex = Math.pow(growthRate, tenure);
  const EMIAmount =
    (principal * monthlyInterestRate * growthRateTenureIndex) /
    (growthRateTenureIndex - 1);

  const totalRepaymentValue = EMIAmount * tenure;
  const totalInterest = totalRepaymentValue - principal;

  if (rates["result"] != "success") {
    result.message = "exchange rate service unavailable";
    return result;
  }
  const nairaExchangeRate: number = rates["conversion_rates"]["NGN"];
  const EMIAmountInNaira = EMIAmount * nairaExchangeRate;
  const totalInterestInNaira = totalInterest * nairaExchangeRate;
  const totalRepaymentValueInNaira = EMIAmount * tenure * nairaExchangeRate;
  result.success = true;
  result.data = {
    total_repayment_value: round(totalRepaymentValueInNaira, 2),
    EMI_amount: round(EMIAmountInNaira, 2),
    total_interest: round(totalInterestInNaira, 2),
    exchange_rate: nairaExchangeRate,
    last_exchange_rate_update: rates["time_last_update_utc"],
    next_exchange_rate_update: rates["time_next_update_utc"],
  };

  return result;
};

export { getRepaymentDetails };
