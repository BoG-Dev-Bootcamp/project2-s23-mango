import createUser from "../../../server/mongodb/actions/createUser"
import verifyUser from "../../../server/mongodb/actions/verifyUser"
import checkMethod from "../../../server/utils/checkMethod"

export default async function handler(req, res) {
    checkMethod(["POST"], req.method)
    if (verifyUser(req, res)) {
        try {
            await createUser(req.body)
        } catch(e) {
            return res.status(500).json({success: false, message: e.message})
        }
        return res.status(200).send("New user created")
    }
    return res.status(403).send("Please login")
}