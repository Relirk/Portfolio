"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _firebase = require('firebase'); var _firebase2 = _interopRequireDefault(_firebase);

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

    _firebase2.default.initializeApp(this.firebaseConfig);
  }
}

exports. default = new Database();
