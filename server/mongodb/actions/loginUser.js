import {connectDB, closeDB} from "../../utils/db"
import User from "../models/user"

export default async function loginUser(userData) {
    await connectDB()
    try {
        // console.log(userData)
        const attemp = await User.find()
        // console.log(attemp)
        const users = await User.count(userData)
        await closeDB()
        if (users > 0) {
            return true
        } else {
            return false
        }
    
        
    } catch (e) {
        console.log(e)
        throw new Error("Unable to login user. Invalid data")
    }
}