import "dotenv/config";

export default {
  port: process.env.PORT || 3000,
  db: {
    database: process.env.DB_NAME || "prueba_db",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "root",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
  },
};
