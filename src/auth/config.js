import { Client, Query, Storage, Account, ID, Databases } from "appwrite";
import conf from "../../conf/conf";

export class DatabaseService{
    client = new Client()
    database;
    storage;

    constructor(){
        this.client.setEndpoint(conf.appwrite_Url)
        this.client.setProject(conf.appwriteProject_id)

        this.database = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createProduct(id,{ productName, price, stock,discountedPrice, productDescription, productImage, category}){
        try {
            return await this.database.createDocument(
                conf.appwriteDatabase_id,
                conf.appwriteCollection_id,
                id,
                { productName, price, stock,discountedPrice, productDescription, productImage,category}
            )
        } catch (error) {
            
        }
    }

    async updateProduct(id, {productName, price, stock,discountedPrice, description, productImage, inStock}){
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabase_id,
                conf.appwriteCollection_id,
                id,
            {productName, price, stock,discountedPrice, description, productImage, inStock}
        )
        } catch (error) {
            
        }
    }

    async deleteProduct(id){
        try {
            await this.database.deleteDocument(
                conf.appwriteDatabase_id,
                conf.appwriteCollection_id,
                id
            )
            return true
        } catch (error) {
            
        }
    }

    async showProduct(id){
        try {
            return await this.database.getDocument(
                conf.appwriteDatabase_id,
                conf.appwriteCollection_id,
                  id)
        } catch (error) {
            
        }
    }
    
    async listProducts(category){
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabase_id, 
                conf.appwriteCollection_id,
                [Query.equal("category", category)]
            )
        } catch (error) {
            console.log("Error while listing all products in config.js", error);
            
        }
    }

    async listAllProducts(){
         try {
            return await this.database.listDocuments(
                conf.appwriteDatabase_id,
                conf.appwriteCollection_id,
            )
        } catch (error) {
            console.log("Error while listing all products in config.js", error);
            
        }
    }

    async imageUpload(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucket_id,
                ID.unique(),
                file
                
                
            )
        } catch (error) {
            
        }
        return false 
        }
        //   #### bad me check krna ha #####

    async deleteImage(imageId){
        try {
            await this.storage.deleteFile(
                conf.appwriteBucket_id,
                imageId
            )
        } catch (error) {
            console.log(error);
            
        }
        }
    

    showImage(fileId) {
return this.storage.getFileView(
    conf.appwriteBucket_id,
    fileId
)
}
}

const databaseService = new DatabaseService()

export default databaseService