const {Product, Vendor} = require('../db');


module.exports = class ProductService{
    async createProduct(data){
        const newProduct = {
            productName: data.productName, 
            description: data.description, 
            price: data.price, 
            inStockQuantity: data.inStockQuantity, 
            isFeatured: data.isFeatured, 
            catergory: data. catergory

        }

        try{
            const product = await Product.create(newProduct)
            return product 
        }catch(err){
            return new Error(err)
        }
    }

    async getProductByProductName(productName){
        try{
            const product = await Product.findOne({where:{productName:productName}})
            return product
        }catch (err){
            return new Error(err)
        }
    }

    async getAllProducts(){
        try{
            const productList = await Product.findAll()

            return productList 
        }catch(err){
            return new Error(err)
        }
    }

    async getAllfeaturedProducts(){
        try{
            const featuredList = await Product.findAll({where:{isFeatured:"true"}})
            return featuredList
        }catch(err){
            return new Error(err)
        }
    }

    async getProductsByCatergory(catergory){
        try{
            const productsByCatergory = await Product.findAll({where:{catergory: catergory}})

            return productsByCatergory
        }catch(err){
            return new Error(err)
        }
    }

    async updateProduct(data){
        const key = data.key
        const value= data.value
        const productId = data.productId
        try{
        const product = await Product.update({[key]:value}, {where:{productId: productId}})

        
            return product[0]
        
    }catch (err){
        return new Error(err);
    }
    }

  async getProductsByVendor(vendorName){
    try{
        const vendor = await Vendor.findOne({where:{vendorName:vendorName}})
        const ProductsByVendor = await Product.findAll({where:{VendorVendorId: vendor.vendorId}})

        return ProductsByVendor

    }catch(err){
        return new Error(err)
    }
  }


  }

