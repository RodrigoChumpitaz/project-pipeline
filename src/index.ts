import app from './app';
import { dbConnection, PORT } from './config';
// import { seedAgents } from './seeders';

(async () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  await dbConnection.default();
  // NUEVO CAMBIO
  // cristian realizo este cambio
  // await seedAgents();
})();
