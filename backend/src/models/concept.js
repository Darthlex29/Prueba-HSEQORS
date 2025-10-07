import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const Concept = sequelize.define("concept", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    definition: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    book_section: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})