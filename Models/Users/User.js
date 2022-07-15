const { DataTypes, Model, Op } = require('sequelize');
const bcrypt = require('bcrypt');
const UsersAddresses = require('../PublicModels/Address/UsersAddresses');

        
module.exports = (sequelize, Sequelize) => {
    class UserModel extends Model {

        
        
         static validatePassword = async (password,hashpass) =>{

          const cb = (err, result) =>{
                if(err){return err}
                return result
            }
        
            try{
            if(await bcrypt.compare(password, hashpass)){
                
              console.log("Login successful!")  
              return true
                
            } else {
                console.log("login unsuccessfull")
                return false
            }
        } catch (err){ 
            console.log("Something Went Wrong", err)
        }}

  
         



    }

    
    UserModel.init({
        
        userId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dateOfBirth:{
            type: DataTypes.DATE
        },
        role: {
            type: DataTypes.ENUM({
                values: ['ADMIN', 'EMP', 'CUSTOMER']
            }),
            allowNull: false
        },
        firstName: {
            type:DataTypes.STRING
        },
        lastName:{
            type: DataTypes.STRING
        },
        addresses:{
            type: DataTypes.ARRAY({
                type:DataTypes.UUID,
        }), defaultValue:[]}
    
    },

        {
            
            hooks: {
                beforeSave: hashPassword = async (user) => {
                    if (user.isNewRecord) {
                        const salt = await bcrypt.genSalt(10, "b");
                        user.password = await bcrypt.hashSync(user.password, salt)
                        console.log(user.password)
                        console.log(user.isNewRecord)
                    }
                },
                beforeUpdate: async (user) => {
                    if (user.password) {
                        const salt = await bcrypt.genSalt(10, "b");
                        user.password = await bcrypt.hashSync(user.password, salt);
                        console.log(user.password)
                        
                    }
                }
            
            }
        
    ,
           sequelize, modelName: 'User'}
        
    )  

    return UserModel
}

