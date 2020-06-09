import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import validate from './validators/validate';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = Router();

const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/', (req, res) => {
  return res.json({ status: 'App running on http://localhost:3333' });
});

routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.post(
  '/points',
  upload.single('image'),
  validate,
  pointsController.store,
);

export default routes;
