'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class poll extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  poll.init(
    {
      poll_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      organization_id: DataTypes.INTEGER,
      poll_title: DataTypes.STRING,
      poll_detail: DataTypes.TEXT,
      poll_date_s: DataTypes.DATE,
      poll_date_e: DataTypes.DATE,
      is_identity: DataTypes.INTEGER,
      ip: DataTypes.STRING,
      date_created: DataTypes.DATE,
      date_updated: DataTypes.DATE,
      is_deleted: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'poll',
      timestamps: false,
      // I don't want createdAt
      createdAt: false,
      updatedAt: false,
      id: false,
    },
  );
  return poll;
};
