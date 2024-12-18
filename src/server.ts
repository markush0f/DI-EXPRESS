import express from 'express';
import { scopePerRequest } from 'awilix-express';
import { container } from './container';
import { router } from './routes';

const app = express();
const port = 3000;

app.use(scopePerRequest(container));
app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
