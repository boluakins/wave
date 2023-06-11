import { Router } from 'express';
import { getRepaymentDetails } from '../controllers/loanController';
import validate from '../middleware/validateRequest';
import { loanRepaymentRequestValidation } from './schema';

const router = Router();

router.get("/repayment", validate(loanRepaymentRequestValidation), getRepaymentDetails);

export default router;