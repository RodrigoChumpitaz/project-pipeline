import app from './app';
import { dbConnection, PORT } from './config';
// import { seedAgents } from './seeders';

(async () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  await dbConnection.default();
  // MANUEL 
  // change by Rodrigo v2
  // cristian UPDATE
  // NUEVO CAMBIO ACTUALIZADO 
  // change by Rodrigo.
  // cristian realizo este cambio
  // await seedAgents();
})();
