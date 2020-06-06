import { Router } from "express";
import multer from 'multer';
import { celebrate, Joi } from "celebrate";

import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = Router();

const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/', (req,res) => {
  return res.json({ status: 'App running on http://localhost:3333' })
});

routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.post(
  '/points', 
  upload.single('image'),
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      state: Joi.string().required().required().max(2),
      city: Joi.string().required(),
      items: Joi.string().required()
    })
  }, {
    abortEarly: false
  }),
  pointsController.store);

export default routes;
