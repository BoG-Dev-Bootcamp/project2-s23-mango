import checkMethod from "@/middleware"
import createUser from "../../../server/mongodb/actions/createUser"


export default async function handler(req, res) {
    checkMethod(req)
    try {
        await createUser(req.body)
    } catch(e) {
        return res.status(500).json({success: false, message: e.message})
    }
    return res.status(200).send("New user created")
}