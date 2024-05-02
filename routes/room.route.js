import Router from 'express';
import { create, findOne, findAll, destroy} from '../controllers/room.controller.js';
import authJwt from '../middlewares/authJwt.js';

const roomRouter = Router()

roomRouter.use(authJwt)
roomRouter.post('/', create)
roomRouter.get('/', findAll)
roomRouter.get('/:id', findOne)
roomRouter.delete('/:id', destroy)

export default roomRouter
  