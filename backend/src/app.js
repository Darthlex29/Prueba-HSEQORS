import express from 'express';
import setupSwagger from './config/swagger.js';

import conceptRoutes from './routes/concept.routes.js';

const app = express();
app.use(express.json());

setupSwagger(app);
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api/concepts', conceptRoutes);


export default app;