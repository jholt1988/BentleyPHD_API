const  express= require("express");
const {User, UserAddress} = require("../db");
const userService = require('../Services/UserService');
const router = express.Router();
const userServInst = new userService();
const AddressService = require('../Services/AddressService');
const { query } = require("express");
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

    router.put('/user/:userId', async function(req, res, next){
         
         const data = {key:req.body.key, value: req.body.value}
        const userId = req.params.userId
        try{  
           const results= await userServInst.updateUser({id:userId, data: data});

                res.send(results)
            

        
             
            }
         catch (err){
            res.send(new Error(err))
        }
    } 
    )

    router.get('/user/:userId', async (req, res, next) => {
        try{
        const userId = req.params.userId;
      const user =  await userServInst.getUserByUserId(userId)
        res.send(user)
        
        } catch(err){
            next(new Error(err))
        }
    }
    )
    router.post('/user/:userId/address',  async(req, res, next) => {
        const userId = req.params.userId;
        const addressType = req.body.addressType
        const billingAddress = {
            addrOne: req.body.addrOne,
            addrTwo: req.body.addrTwo, 
            city: req.body.city, 
            state: req.body.state,
            zipcode: req.body.zipcode,
            addressType: 'Billing'
        }
        const mailingAddress = {
            addrOne: req.body.addrOne,
            addrTwo: req.body.addrTwo, 
            city: req.body.city, 
            state: req.body.state,
            zipcode: req.body.zipcode,
            addressType: 'Mailing'
        }
        try{
            if(addressType === 'Billing'){
           const address = await addressServInst.createUserBilling({address:billingAddress, userId:userId}).then((address => {
            return address
           }));

           
           const userAddress = await userServInst.addUserAddress(AddressAddressId, UserUserId)
           (address, userAddress)
             res.send(address);
            }
            if(addressType === 'Mailing'){
                const  address =  await addressServInst.createUserMailing({address:mailingAddress, userId:userId}).then((address) => {
                    return address
                });
                const addressId = await address.address.addressId
                (addressId, userId)
                const newUserAddress = await userServInst.addUserAddress(addressId,userId )
               
                (address, newUserAddress)
                res.send(address)
                
            }
        } catch (err) {
           next(err)
        }

        router.put( '/user/:userId/address', async(req, res, next) => {
            const userId = req.params.userId;
                const addressId = await UserAddress.findOne({where:{
                    UserUserId:userId
                }})
                (addressId)
          const updateUser = await  userServInst.updateUser({id:userId, data:{key:"addresses", value:addressId.AddressAddressId}})
                (addressId.AddressAddressId) 
       
                res.send(updateUser)[1]


            })
        })
    
}