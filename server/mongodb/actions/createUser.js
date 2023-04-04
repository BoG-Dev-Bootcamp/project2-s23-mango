import connectDB from "../index.js"
import User from "../models/user"

export default async function createUser(userData) {
    await connectDB()
    console.log(userData)
    try {
        console.log("Inside of try")
        const user = new User(userData)
        await user.save()
    } catch (e) {
        console.log("In catch")
        throw new Error("Unable to create user. Invalid data")
    }
}