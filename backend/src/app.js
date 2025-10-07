import express from 'express';

import conceptRoutes from './routes/concept.routes.js';

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api/concepts', conceptRoutes);

export default app;