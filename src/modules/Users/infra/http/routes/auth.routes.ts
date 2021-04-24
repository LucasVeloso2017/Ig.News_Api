import { Router } from "express";

import SessionController from '../controllers/SessionController'

const sessionController = new SessionController()
const authRouter = Router()

authRouter.post('/',sessionController.create)

export default authRouter