const {Vendor} = require("../db");


async function addVendorData (){
    try {
        const bulkAddMockVendors = await Vendor.bulkCreate([
            {
                vendorName: "Bubba Electric Import", 
                phonenumber: "1800-867-5309", 
                vendorEmail:"orders@BEI.com",
            }, 
            {
                vendorName: "Sally Communication Co.", 
                phonenumber: "1800-867-5309", 
                vendorEmail:"orders@SallyCom.com",
            }, 
            {
                vendorName: "Sandy Gaming", 
                phonenumber: "1800-867-5309", 
                vendorEmail:"orders@SandyGames.com",
            }, 
            {
                vendorName: " Jalen Computing", 
                phonenumber: "1800-867-5309", 
                vendorEmail:"orders@Jalen.com",
            },
            {
                vendorName: "Bubba Electric Import", 
                phonenumber: "1800-867-5309", 
                vendorEmail:"orders@BEI.com",
            }
        ])
        return bulkAddMockVendors
    } catch (err) {
        throw new Error(err)
    }

    
}

module.exports = addVendorData