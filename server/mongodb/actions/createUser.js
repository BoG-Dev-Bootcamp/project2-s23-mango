import connectDB from "../index.js"
import User from "../models/user"

export default async function createUser(userData) {
    await connectDB()
    
    try {
        console.log("Inside of try")
        const user = new User(userData)
        console.log(user)
        await user.save()
    } catch (e) {
        console.log("In catch")
        throw new Error("Unable to create user. Invalid data")
    }
    await closeDB()
}