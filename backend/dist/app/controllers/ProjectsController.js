"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _firebase = require('firebase'); var _firebase2 = _interopRequireDefault(_firebase);
var _crypto = require('crypto'); var _crypto2 = _interopRequireDefault(_crypto);

const Node = '/Projects/';

class ProjectController {
  async index(req, res) {
    const projectReference = _firebase2.default.database().ref(Node);

    const snapshot = await projectReference.once('value');
    return res.json(snapshot.val());
  }

  async store(req, res) {
    const { title, description, image, url } = req.body;

    const currentDate = new Date().valueOf().toString();
    const random = Math.random().toString();
    const hash = _crypto2.default
      .createHash('md5')
      .update(currentDate + random)
      .digest('hex');

    const projectReference = _firebase2.default.database().ref(`${Node}${hash}/`);
    await projectReference.set({ title, description, image, url });

    projectReference.on('value', snapshot => {
      return res.json(snapshot.val());
    });
  }

  async update(req, res) {
    const { title, description, image, url } = req.body;

    const projectReference = _firebase2.default
      .database()
      .ref(`${Node}${req.params.id}/`);
    await projectReference.update({ title, description, image, url });

    projectReference.on('value', snapshot => {
      return res.json(snapshot.val());
    });
  }

  async remove(req, res) {
    const projectReference = _firebase2.default
      .database()
      .ref(`${Node}${req.params.id}/`);
    await projectReference.remove();
    return res.json();
  }
}

exports. default = new ProjectController();
