import cors from 'cors';
import express from 'express';
import {sequelize} from './sequelize';

import {IndexRouter} from './controllers/v0/index.router';

import bodyParser from 'body-parser';
import {config} from './config/config';
import {V0_USER_MODELS} from './controllers/v0/model.index';

// ThienNLNT
(async () => {
  await sequelize.addModels(V0_USER_MODELS);

  console.debug("Initialize database connection...");
  await sequelize.sync();
// ThienNLNT
  const app = express();
  const port = process.env.PORT || 8080;

  app.use(bodyParser.json());
// ThienNLNT
  // We set the CORS origin to * so that we don't need to
  // worry about the complexities of CORS this lesson. It's
  // something that will be covered in the next course.
  app.use(cors({
    allowedHeaders: [
      'Origin', 'X-Requested-With',
      'Content-Type', 'Accept',
      'X-Access-Token', 'Authorization',
    ],
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    preflightContinue: true,
    origin: '*',
  }));

  app.use('/api/v0/', IndexRouter);
// ThienNLNT
  // Root URI call
  app.get( '/', async ( req, res ) => {
    res.send( '/api/v0/' );
  } );

// ThienNLNT
  // Start the Server
  app.listen( port, () => {
    console.log( `server running ${config.url}` );
    console.log( `press CTRL+C to stop server` );
  } );
})();
