import {connectDB, closeDB} from "../../utils/db"
import User from "../models/user"


const readUsers = async () => {
    await connectDB()
    try {
        const users = await User.find({}, "_id firstName lastName")
        console.log(users)
        return users
    } catch(e) { 
        console.log(e)
    }
}
closeDB()
export {readUsers}

