import firebase from 'firebase';
import crypto from 'crypto';

const Node = '/Users/';

class UserController {
  async index(req, res) {
    const userReference = firebase.database().ref(Node);

    const snapshot = await userReference.once('value');
    return res.json(snapshot.val());
  }

  async store(req, res) {
    const { username, name, age } = req.body;

    const currentDate = new Date().valueOf().toString();
    const random = Math.random().toString();
    const hash = crypto
      .createHash('md5')
      .update(currentDate + random)
      .digest('hex');

    const userReference = firebase.database().ref(`${Node}${hash}/`);
    await userReference.set({ username, name, age });

    userReference.on('value', snapshot => {
      return res.json(snapshot.val());
    });
  }

  async update(req, res) {
    const { username, name, age } = req.body;

    const userReference = firebase.database().ref(`${Node}${req.params.id}/`);
    await userReference.update({ username, name, age });

    userReference.on('value', snapshot => {
      return res.json(snapshot.val());
    });
  }

  async remove(req, res) {
    const userReference = firebase.database().ref(`${Node}${req.params.id}/`);
    await userReference.remove();
    return res.json();
  }
}

export default new UserController();
