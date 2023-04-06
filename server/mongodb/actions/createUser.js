import {connectDB, closeDB} from "../../utils/db"
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
        console.log(e)
        throw new Error("Unable to create user. Invalid data")
    }
    await closeDB()
}