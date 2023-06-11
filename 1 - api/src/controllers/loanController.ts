import { Request, Response, NextFunction } from "express";
import * as loanService from "../services/loanService";

export const getRepaymentDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { principal, tenure, rate } = req.body;

    const result = await loanService.getRepaymentDetails(
      principal,
      tenure,
      rate
    );
    return res.json(result);
  } catch (error) {
    next(error);
  }
};
