import express, { Router } from "express";
import cors from 'cors';

const router = Router();

router.use(express.json());
router.use(cors());

export default router;
