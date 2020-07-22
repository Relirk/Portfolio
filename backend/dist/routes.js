"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _ProjectsController = require('./app/controllers/ProjectsController'); var _ProjectsController2 = _interopRequireDefault(_ProjectsController);

const routes = new (0, _express.Router)();

// API
routes.get('/', async (req, res) => {
  return res.json({ api: 'NodeJS Express Firebase API', status: 'up' });
});

// routes.use(authMiddleware);

// User
routes.get('/users', _UserController2.default.index);
routes.post('/users', _UserController2.default.store);
routes.put('/users/:id', _UserController2.default.update);
routes.delete('/users/:id', _UserController2.default.remove);

// Projects
routes.get('/projects', _ProjectsController2.default.index);
routes.post('/projects', _ProjectsController2.default.store);
routes.put('/projects/:id', _ProjectsController2.default.update);
routes.delete('/projects/:id', _ProjectsController2.default.remove);

exports. default = routes;
