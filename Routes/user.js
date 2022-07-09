const  express= require("express");
const {User} = require("../db");
const userService = require('../Services/UserService');
const router = express.Router();
const userServInst = new userService();
const AddressService = require('../Services/AddressService');
const addressServInst = new AddressService()

module.exports = (app) => {
    
 app.use('/users', router)

    router.get('/',  async function(req, res, next ){
          
            try{
              const users = await userServInst.getAllUsers();
             if(users){
                return res.json(users)
             }

            } catch (err){
                res.send(new Error(err))
            }
    })

    router.put('/:userId', async function(req, res, next){
         
         const data = {key:req.body.key, value: req.body.value}
        const userId = req.params.userId
        try{  console.log(req.body)
           const results= await userServInst.updateUser({id:userId, data: data});
           console.log(results)
                res.send(results)
            

        
             
            }
         catch (err){
            res.send(new Error(err))
        }
    } 
    )

    router.get('/:userId', async (req, res, next) => {
        try{
        const userId = req.params.userId;
      const user =  userServInst.getUserByUserId(userId).then((user) => {
        if(user){
            return user
        }
        else return new Error()
      })
       return res.status(200).json(user)
        
        } catch(err){
            res.send(new Error(err))
        }
    }
    )
    router.post('/user/:userId/address',  async(req, res, next) => {
        const userId = req.params.userId;
        const billingAddress = req.params.body.billingAddress
        const mailingAddress = req.params.body.mailingAddress

        try{
            if(billingAddress){
           const address = await addressServInst.createUserBilling();
              return res.send(address);
            }
            if(mailingAddress){
                const  address =  await addressServInst.createUserShipping();
               return res.send(address);
            }
        } catch (err) {
           throw new Error(err)
        }
    })
}