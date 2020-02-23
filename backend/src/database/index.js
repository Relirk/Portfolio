import firebase from 'firebase';

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.firebaseConfig = {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
    };

    firebase.initializeApp(this.firebaseConfig);
  }
}

export default new Database();
