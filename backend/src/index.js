import app from "./app.js";
import config from "./config/config.js";
import { sequelize, connect } from "./database/database.js";

import "./models/concept.js"

async function main() {
  await connect();

  await sequelize.sync({ alter: true });

  const server = app.listen(config.port, () => {
    console.log(`✅ Server is running on port ${config.port}`);
  });

  server.on("error", (err) => {
    console.error(`❌ Error starting server: ${err.message}`);
  });
}

main();
