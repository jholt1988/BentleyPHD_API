const {UserAddress} = require('../db');

const UserAddresses = [
    {
        "UserUserId": "9cf0b620-6cab-4f26-895b-a584fcc16039",
        "AddressAddressId": "2bd50601-83ee-480c-8c79-4c3dd064b9cb",
        "AddressType": "BILLING"
    },
    {
        "UserUserId": "a29bbf45-bf83-48fe-ba25-0e9c96d2744b",
        "AddressAddressId": "338f4ab7-7d08-4666-9b40-36902b190876",
        "AddressType": "MAILING"
    },
    {
        "UserUserId": "b43276cc-7e91-40ba-891f-3fad57069bec",
        "AddressAddressId": "2bd50601-83ee-480c-8c79-4c3dd064b9cb",
        "AddressType": "BILLING"
    },
    {
        "UserUserId": "b43276cc-7e91-40ba-891f-3fad57069bec",
        "AddressAddressId": "0348e11b-ab20-45e4-9407-848243d7b781",
        "AddressType": "BILLING"
    },
    {
        "UserUserId": "9cf0b620-6cab-4f26-895b-a584fcc16039",
        "AddressAddressId": "2bd50601-83ee-480c-8c79-4c3dd064b9cb",
        "AddressType": "BILLING"
    },
    {
        "UserUserId": "b43276cc-7e91-40ba-891f-3fad57069bec",
        "AddressAddressId": "0b74e806-b063-43bf-8b71-324af15ad983",
        "AddressType": "BILLING"
    },
    {
        "UserUserId": "9cf0b620-6cab-4f26-895b-a584fcc16039",
        "AddressAddressId": "01c7ef30-4f0e-4b5f-922a-98747c9028c8",
        "AddressType": "MAILING"
    },
    {
        "UserUserId": "5889a370-e09e-47f4-8f3e-36ee20a7e9c1",
        "AddressAddressId": "09b28e65-e2db-421c-9201-f7a0319e769c",
        "AddressType": "MAILING"
    },
    {
        "UserUserId": "3766d622-116f-4f30-b7c3-2cbe37b961ec",
        "AddressAddressId": "2bd50601-83ee-480c-8c79-4c3dd064b9cb",
        "AddressType": "MAILING"
    },
    {
        "UserUserId": "3766d622-116f-4f30-b7c3-2cbe37b961ec",
        "AddressAddressId": "2bd50601-83ee-480c-8c79-4c3dd064b9cb",
        "AddressType": "MAILING"
    }
]

async function addUserAddress () {
    try{
    const bulkAddMockUserAddresses = await UserAddress.bulkCreate(UserAddresses)

    return bulkAddMockUserAddresses
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = addUserAddress