const { DataTypes, Model, Op } = require('sequelize');
const bcrypt = require('bcrypt')

        
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
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        dateOfBirth:{
            type: DataTypes.DATEONLY
        },
        role: {
            type: DataTypes.ENUM({
                values: ['ADMIN', 'EMP', 'CUSTOMER']
            }),
            allowNull: false, 
            defaultValue:"CUSTOMER"
        }
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
            },
            sequelize, modelName: 'User'
        })
        

    return UserModel
}
