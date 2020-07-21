import app from './app';

const serverInstance = app.listen(process.env.PORT, () => {
  const host = serverInstance.address().address;
  const { port } = serverInstance.address();
  console.log('Portfolio API listening at http://%s:%s', host, port);
});
