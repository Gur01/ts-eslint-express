import express, { Application } from 'express';
import router from './routes';

const app: Application = express();
let port = 4000;

app.use('/api/countries', router.countries);

const connect = (currentPort: number) => {
  app.listen(currentPort, () => console.log(`Listening on port ${currentPort}`));
};
process.on('uncaughtException', (error: any) => {
  if (error.code === 'EADDRINUSE') {
    port += 1;
    connect(port);
  } else {
    // eslint-disable-next-line no-console
    console.log(error);
  }
});

connect(port);
