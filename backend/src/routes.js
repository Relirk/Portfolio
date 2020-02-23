import { Router } from 'express';

import UserController from './app/controllers/UserController';
import ProjectsController from './app/controllers/ProjectsController';

const routes = new Router();

// API
routes.get('/', async (req, res) => {
  return res.json({ api: 'NodeJS Express Firebase API', status: 'up' });
});

// routes.use(authMiddleware);

// User
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.remove);

// Projects
routes.get('/projects', ProjectsController.index);
routes.post('/projects', ProjectsController.store);
routes.put('/projects/:id', ProjectsController.update);
routes.delete('/projects/:id', ProjectsController.remove);

export default routes;
