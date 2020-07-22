"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _firebase = require('firebase'); var _firebase2 = _interopRequireDefault(_firebase);
var _crypto = require('crypto'); var _crypto2 = _interopRequireDefault(_crypto);

const Node = '/Users/';

class UserController {
  async index(req, res) {
    const userReference = _firebase2.default.database().ref(Node);

    const snapshot = await userReference.once('value');
    return res.json(snapshot.val());
  }

  async store(req, res) {
    const { username, name, age } = req.body;

    const currentDate = new Date().valueOf().toString();
    const random = Math.random().toString();
    const hash = _crypto2.default
      .createHash('md5')
      .update(currentDate + random)
      .digest('hex');

    const userReference = _firebase2.default.database().ref(`${Node}${hash}/`);
    await userReference.set({ username, name, age });

    userReference.on('value', snapshot => {
      return res.json(snapshot.val());
    });
  }

  async update(req, res) {
    const { username, name, age } = req.body;

    const userReference = _firebase2.default.database().ref(`${Node}${req.params.id}/`);
    await userReference.update({ username, name, age });

    userReference.on('value', snapshot => {
      return res.json(snapshot.val());
    });
  }

  async remove(req, res) {
    const userReference = _firebase2.default.database().ref(`${Node}${req.params.id}/`);
    await userReference.remove();
    return res.json();
  }
}

exports. default = new UserController();
