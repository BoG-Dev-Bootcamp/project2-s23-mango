import connectDB from "../index.js"
import User from "../models/user"

export default async function createUser(userData) {
    await connectDB()
    try {
        console.log("INSIDE OF TRY")
        const user = new User(userData)
        await user.save()
    } catch (e) {
        console.log("in catch")
        throw new Error("Unable to create user. Invalid data")
    }
}