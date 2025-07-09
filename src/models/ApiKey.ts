import { DataTypes } from 'sequelize';
import sequelize from '@/config/sequelize';

const ApiKey = sequelize.define('ApiKey', {
  apikey: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }
}, {
  tableName: 'apikey', // optional: match your actual DB table
  timestamps: false, // optional: enables column createdAt & updatedAt
});

export default ApiKey;
