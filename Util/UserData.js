const {User} = require('../db')

async function addUserData (){
 try{
    const bulkAddMockUsers =await User.bulkCreate([
        {
            username: "jholtadmin", 
            password: "test",
            email: 'TEST@Test.com',
            dateOfBirth: '07/11/1988',
            role: "ADMIN"
        },
        {
            username: "bentleyadmin", 
            password: "test",
            email: 'bentley@Test.com',
            dateOfBirth: '01/19/2019',
            role: "ADMIN"
        }, 
        {
            
                username: "testcustomer1", 
                password: "test",
                email: 'customer1@Test.com',
                dateOfBirth: '07/11/1988',
                role: "CUSTOMER"
            }, 
            {
                
                    username: "testcustomer2", 
                    password: "test",
                    email: 'customer2@Test.com',
                    dateOfBirth: '07/11/1988',
                    role: "ADMIN"
                
            },
            {
                username: "jholtadmin", 
                password: "test",
                email: 'TEST@Test.com',
                dateOfBirth: '07/11/1988',
                role: "ADMIN"
            }
        
    ])

    return bulkAddMockUsers
 } catch(err) {
    throw new Error(err)

 }
 
}

 module.exports = addUserData