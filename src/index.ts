import express from 'express';

const app:express.Application = express();
let port = 4000;

app.get('/', (req:express.Request, res:express.Response) => {
  res.send('Hello World');
});

const connect = (currentPort: number) => {
  // eslint-disable-next-line no-console
  app.listen(currentPort, () => console.log(`Listening on port ${currentPort}`));
};

process.on('uncaughtException', (error:any) => {
  if (error.code === 'EADDRINUSE') {
    port += 1;
    connect(port);
  } else {
    // eslint-disable-next-line no-console
    console.log(error);
  }
});

connect(port);
