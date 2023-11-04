import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import type { Express } from 'express';

import { bindings } from './bindings';
import { initRouter } from './utils/init-router';
import { initDBConnection } from './database/postgress-client';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || '3100';
const origin = process.env.ORIGIN || 'http://localhost:3000';

app.use(cors({ origin, methods: ['GET', 'POST'] }));

initDBConnection();
initRouter(app, port, bindings);