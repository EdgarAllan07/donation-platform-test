import { Router } from "express";
import { getData } from "../controller/zbd.controller.js";
const router = Router()

router.post("/zbd",getData)


export default router