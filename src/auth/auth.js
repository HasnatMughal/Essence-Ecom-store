import { Client, Account, ID } from "appwrite";
import conf from "../../conf/conf";


export class AuthService{
    client = new Client()
    account;

    constructor(){
        this.client.setEndpoint(conf.appwrite_Url)
        this.client.setProject(conf.appwriteProject_id)

        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)

        if(userAccount){
            return this.login({email, password})
        } else{
            return userAccount;
        }
        } catch (error) {
            console.log("Creating account error on auth.js", error)
        }
    }

    async login({email, password}){
try {
           const userLogin =  await this.account.createEmailPasswordSession(email, password)
           return userLogin;
} catch (error) {
    console.log("Login error on auth.js", error)
}
    }

    async logout(){
        try {
            const userLogout = await this.account.deleteSessions()
        } catch (error) {
            console.log("Error while logout on  auth.js", error)
        }
    }

    async checkUser(){
        try {
           const user =  await this.account.get();
           return user
           
        } catch (error) {
            console.log("Error getting user in  auth.js", error)
        }
    }
}

const authentication = new AuthService()

export default authentication