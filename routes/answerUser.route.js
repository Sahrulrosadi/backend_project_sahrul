import { Router } from "express";
import { findAll , findOne, checkAnswer} from "../controllers/answerUser.controller.js";
import authJwt from "../middlewares/authJwt.js";
const answerRoute = Router()

answerRoute.use(authJwt)
answerRoute.get('/', findAll)
answerRoute.get('/:id', findOne)
answerRoute.post('/:id', checkAnswer)



export default answerRoute