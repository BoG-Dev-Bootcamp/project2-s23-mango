import User from "../../../server/mongodb/models/user"
import connectDB from "../../../server/mongodb/index"
import createUser from "../../../server/mongodb/actions/createUser"

export default async function handler(req, res) {
    if (req.method == 'POST') {
        const userData = req.body

        connectDB()
        const user = new User({ userData})
        await user.save()

        return res.status(200).send("New user created")
    }
    return res.status(400).send("Incorrect req method type")

}