import firebase from 'firebase';
import crypto from 'crypto';

const Node = '/Projects/';

class ProjectController {
  async index(req, res) {
    const projectReference = firebase.database().ref(Node);

    const snapshot = await projectReference.once('value');
    return res.json(snapshot.val());
  }

  async store(req, res) {
    const { title, description, image, url } = req.body;

    const currentDate = new Date().valueOf().toString();
    const random = Math.random().toString();
    const hash = crypto
      .createHash('md5')
      .update(currentDate + random)
      .digest('hex');

    const projectReference = firebase.database().ref(`${Node}${hash}/`);
    await projectReference.set({ title, description, image, url });

    projectReference.on('value', snapshot => {
      return res.json(snapshot.val());
    });
  }

  async update(req, res) {
    const { title, description, image, url } = req.body;

    const projectReference = firebase
      .database()
      .ref(`${Node}${req.params.id}/`);
    await projectReference.update({ title, description, image, url });

    projectReference.on('value', snapshot => {
      return res.json(snapshot.val());
    });
  }

  async remove(req, res) {
    const projectReference = firebase
      .database()
      .ref(`${Node}${req.params.id}/`);
    await projectReference.remove();
    return res.json();
  }
}

export default new ProjectController();
