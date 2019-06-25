import dotenv from 'dotenv';
import express from 'express';

import server from './graphql';
import connectDB from './config/db';

dotenv.config();
connectDB();

const app = express();

const {
  PORT: port,
  GRAPHQL_PATH: path,
} = process.env;

server.applyMiddleware({ app, path });

app.listen({ port }, () => {
  console.log(`Server ready at http://localhost:${port}${path}`);
});
