import connectDB from "../index.js"
import User from "../models/user"


const readUsers = async () => {
    await connectDB()
    try {
        const users = await User.find({})
        return users
    } catch(e) { 
        console.log(e)
    }
}
export {readUsers}