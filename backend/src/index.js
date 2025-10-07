import app from "./app.js";
import config from "./config/config.js";

async function main() {
  const server = app.listen(config.port, () => {
    console.log(`✅ Server is running on port ${config.port}`);
  });

  server.on("error", (err) => {
    console.error(`❌ Error starting server: ${err.message}`);
  });
}

main();

