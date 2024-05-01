import { Router } from "express";
import { findAll, findOne, update, destroy } from "../controllers/user.controller.js";
import authJwt from "../middlewares/authJwt.js";
const userRouter = Router()


userRouter.use(authJwt)
userRouter.get('/', findAll)
userRouter.get('/:id', findOne)
userRouter.put('/:id', update)
userRouter.delete('/:id', destroy)
export default userRouter