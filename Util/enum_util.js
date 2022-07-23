const { dropEnum } = require('sequelize-replace-enum-postgres');

const replaceEnum = require('sequelize-replace-enum-postgres').default;

const {Sequelize,QueryInterface} = require('sequelize')


module.exports = {
  up: (queryInterface, Sequelize) => {
    return dropEnum({
      queryInterface,
      name:"enum_Users_role",
      tableName: 'Users',
      columnName: 'role',
      defaultValue: '',
      newValues: ['CUSTOMER', 'EMP', 'ADMIN']
    
    }),dropEnum({
      queryInterface,
      name:"enum_UserAddresses_AddressType",
      tableName: 'UsersAddresses',
      columnName: 'AddressType',
      defaultValue: '',
      newValues: ['Mailing', 'Billing']
    
    }),
    dropEnum({
      queryInterface,
      name:"enum_Addresses_addressTypes",
      tableName: 'Addresses',
      columnName: 'addressType',
      defaultValue: '',
      newValues: ['Mailing', 'Billing', 'Vendor']
    
    }),dropEnum({
      queryInterface,
      name:"enum_Carts_status",
      tableName: 'Carts',
      columnName: 'statues',
      defaultValue: '',
      newValues: ['ACTIVE', 'INACTIVE']
    
    }), dropEnum({
      queryInterface,
      name:"enum_Payments_method",
      tableName: 'Payments',
      columnName: 'method',
      defaultValue: '',
      newValues: ['AMEX', 'VISA', 'MC', 'DISC']
    
    }), dropEnum({
      queryInterface,
      name:"enum_Products_catergory",
      tableName: 'Products',
      columnName: 'catergory',
      defaultValue: '',
      newValues: ['Laptop', 'Desktop', 'Gaming Console', 'Tablet', 'Wearables', 'Cellphone']
    
    }), dropEnum({
      queryInterface,
      name:"enum_Statuses_statusName",
      tableName: 'Statuses',
      columnName: 'statusname',
      defaultValue: '',
      newValues: ['Pending', 'Approved', 'Shipped', 'Delivered']
    
    })  
  },

  down: (queryInterface, Sequelize) => {
    return replaceEnum({
      queryInterface,
      name:"enum_Users_role",
      tableName: 'Users',
      columnName: 'role',
      defaultValue: 'CUSTOMER',
      newValues: ['CUSTOMER', 'EMP', 'ADMIN']
    
    }),replaceEnum({
      queryInterface,
      name:"enum_UserAddresses_AddressType",
      tableName: 'UserAddresses',
      columnName: 'AddressType',
      defaultValue: '',
      newValues: ['Mailing', 'Billing']
    
    }),
    replaceEnum({
      queryInterface,
      name:"enum_Addresses_addressTypes",
      tableName: 'Addresses',
      columnName: 'addressType',
      defaultValue: '',
      newValues: ['Mailing', 'Billing', 'Vendor']
    
    }),replaceEnum({
      queryInterface,
      name:"enum_Carts_status",
      tableName: 'Carts',
      columnName: 'status',
      defaultValue: 'ACTIVE',
      newValues: ['ACTIVE', 'INACTIVE']
    
    }), replaceEnum({
      queryInterface,
      name:"enum_Payments_method",
      tableName: 'Payments',
      columnName: 'method',
      defaultValue: '',
      newValues: ['AMEX', 'VISA', 'MC', 'DISC']
    
    }), replaceEnum({
      queryInterface,
      name:"enum_Products_catergory",
      tableName: 'Products',
      columnName: 'catergory',
      newValues: ['Laptop', 'Desktop', 'Gaming Console', 'Tablet', 'Wearables', 'Cellphone']
    
    }), replaceEnum({
      queryInterface,
      name:"enum_Statuses_statusName",
      tableName: 'Statuses',
      columnName: 'statusName',
      defaultValue: '',
      newValues: ['Pending', 'Approved', 'Shipped', 'Delivered']
    
    })  ;
  }
};