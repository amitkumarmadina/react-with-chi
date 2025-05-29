import conf from '../conf.js';
import { Client, Account,ID } from 'appwrite';

export class AuthService{
client=new this.client();
accounts;

constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);
    this.accounts=new Account(this.client); 
}
async createAccount(email, password, name) {
    try {
        const userAccount= await this.accounts.create(ID.unique(),email, password, name);
        //return response;
        if(userAccount) {
        return this.login({email, password});
        }else { 
           return userAccount
        }
    } catch (error) {
        console.error('Error creating account:', error);
        throw error;
    }
}

async login({email, password}) {
    try {
        const session = await this.accounts.createSession(email, password);
        return session;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
}

async getCurrentUser() {
    try {
        const user = await this.accounts.get();
        return user;
    } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error", error);
    }
    return null;
}

async logout() {
    try {
        await this.accounts.deleteSessions('current');
        return true;
    } catch (error) {
        console.error('Error logging out:', error);
        throw error;
    }
}
}

const authService=new AuthService();


export default authService;