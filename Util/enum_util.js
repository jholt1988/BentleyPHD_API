const { dropEnum } = require('sequelize-replace-enum-postgres');

const replaceEnum = require('sequelize-replace-enum-postgres').default;

const {Sequelize,QueryInterface} = require('sequelize')


module.exports = {
  up: (queryInterface, Sequelize) => {
    return dropEnum({
      queryInterface,
      name:"enum.Users.role"
      // tableName: 'User',o
      // columnName: 'role',
      // defaultValue: 'CUSTOMER',
      // newValues: ['ADMIN', 'EMP','CUSTOMER'],
    
    });
  },

  down: (queryInterface, Sequelize) => {
    return replaceEnum({
      queryInterface,
      tableName: 'User',
      columnName: 'role',
      defaultValue: 'Customer',
      newValues: ['ADMIN', 'EMP','CUSTOMER' ],
    });
  }
};