const { vendor, Vendor } = require('../db');
const AddressService = require('../Services/AddressService');
const AddressServiceInsta = new AddressService()




module.exports = class VendorService {
    // Create a new Vendor instance.
    async createVendor(data) {
        const newVendor = {
            vendorName: data.vendorName,
            phonenumber: data.phonenumber,
            vendorEmail: data.vendorEmail
        }
        try {
            const vendor = await Vendor.create({ data })

            return vendor
        } catch (err) {
            throw new Error(err)
        }
    }

    // Update a vendor.
    /**
     *
     *
     * @param {*} data
     * @return {*} 
     */
    async updateVendor(data) {
        const key = data.key
        const value = data.value
        const vendorId = vendorId

        try {
            const vendor = await Vendor.update({ [key]: value }, { where: { vendorId: vendorId } })
            return vendor
        } catch (err) {
            return new Error(err)
        }
    }

    // Get a vendor by name.
    async getVendor(vendorName) {
        try {
            const vendor = await Vendor.findOne({ where: { vendorName: vendorName } })

            return vendor
        } catch (err) {
            return new Error(err)
        }
    }

    // Returns all available Vendors.
    async getAllVendors() {
        try {
            const vendorList = await Vendor.findAll()

            return vendorList
        } catch (err) {
            return new Error(err)
        }
    }
    // Create a new vendor address.
    async createNewVendorAddress(data) {
        const addressType = data.addressType
        const address = data.address
        const vendorId = data.vendorId

        try {
            if (addressType = 'vendor') {
                const newAddress = await AddressServiceInsta.createNewVendorAddress({ address, vendorId });
                return newAddress
            }
            return newAddress
        } catch (err) {
            return new Error(err)
        }
    }
}