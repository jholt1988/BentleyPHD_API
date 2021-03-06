
const { Product, Vendor, db } = require('../db');
const { QueryTypes } = require('sequelize');


module.exports = class ProductService {
    // Create a new product.
    async createProduct(data) {
        const newProduct = {
            productName: data.productName,
            description: data.description,
            price: data.price,
            inStockQuantity: data.inStockQuantity,
            isFeatured: data.isFeatured,
            catergory: data.catergory,
            VendorVendorId: data.VendorVendorId

        }

        try {
            const product = await Product.create(newProduct)
            return product
        } catch (err) {
            return new Error(err)
        }
    }

    // Get a product by its name.
    async getProductByProductName(productName) {
        try {
            const product = await Product.findOne({ where: { productName: productName } })
            return product
        } catch (err) {
            return new Error(err)
        }
    }
    // Returns a list of all products

    async getAllProducts() {
        try {
            const productList = await Product.findAll()


            return productList
        } catch (err) {
            return new Error(err)
        }
    }

    // Get all featured products.
    async getAllfeaturedProducts() {
        try {
            const featuredList = await Product.findAll({ where: { isFeatured: "true" } })
            return featuredList
        } catch (err) {
            return new Error(err)
        }
    }

    // Get all products for a given catergory.
    async getProductsByCatergory(catergoryName) {

        try {
            const productsList = await db.sequelize.query(
                'SELECT * FROM public."Products"WHERE catergory=:cat ORDER BY "productId" ASC ',
                {
                    replacements: { cat: `${catergoryName}` },
                    type: QueryTypes.SELECT
                })
                (productsList)

            return productsList
        } catch (err) {
            return new Error(err)
        }
    }

    // Update a product.
    async updateProduct(data) {
        const key = data.key
        const value = data.value
        const productId = data.productId
        try {
            const product = await Product.update({ [key]: value }, { where: { productId: productId } })


            return product[0]

        } catch (err) {
            return new Error(err);
        }
    }

    async getProductsByVendor(vendorName) {
        try {
            const vendor = await Vendor.findOne({ where: { vendorName: vendorName } })
            const ProductsByVendor = await Product.findAll({ where: { VendorVendorId: vendor.vendorId } })

            return ProductsByVendor

        } catch (err) {
            return new Error(err)
        }
    }


}

