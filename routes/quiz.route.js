import { Router } from "express";
import { create, findAll, findOne, update, destroy} from "../controllers/quiz.controller.js";
import authJwt from "../middlewares/authJwt.js";
const quizRoute = Router()


quizRoute.use(authJwt)
quizRoute.post('/', create)
quizRoute.get('/', findAll)
quizRoute.get('/:id', findOne)
quizRoute.put('/:id', update)
quizRoute.delete('/:id', destroy)

export default quizRoute