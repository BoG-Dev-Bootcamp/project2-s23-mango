import {connectDB, closeDB } from "../../utils/db"
import User from "../models/user"
import bcrypt from "bcryptjs"

export default async function createUser(userData) {
    await connectDB()
    try {
        console.log("Inside of try")
        const password = req.body.password
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        userData["password"] = hash
        const user = new User(userData)
        console.log(user)
        await user.save()
    } catch (e) {
        console.log("In catch")
        throw new Error("Unable to create user. Invalid data")
    }
    await closeDB()
}