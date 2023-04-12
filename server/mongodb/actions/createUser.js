import {connectDB, closeDB } from "../../utils/db"
import User from "../models/user"
import bcrypt from "bcryptjs"

export default async function createUser(userData) {
    try {
        console.log("Inside of try")
        const { firstName, lastName, email, password } = userData

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        await connectDB()
        const user = new User({firstName, lastName, email, password})
        console.log(user)
        await user.save()

    } catch (e) {
        console.log("In catch")
        throw new Error("Unable to create user. Invalid data")
    }
    await closeDB()
}