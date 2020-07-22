"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const serverInstance = _app2.default.listen(process.env.PORT, () => {
  const host = serverInstance.address().address;
  const { port } = serverInstance.address();
  console.log('Portfolio API listening at http://%s:%s', host, port);
});
