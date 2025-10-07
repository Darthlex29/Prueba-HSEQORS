import Sequelize from 'sequelize';
import config from '../config/config.js';

export const sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    {
        host: config.db.host,
        port: config.db.port,
        dialect: config.db.dialect,
        logging: false,
    }
);

export async function connect() {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connected successfully.');
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error);
    }
}