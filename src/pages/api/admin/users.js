import { readUsers } from "../../../../server/mongodb/actions/readUsers"

export default async function handler(req, res) {
    try {
        return res.status(200).json(readUsers())
    } catch(e) {
        return res.status(500).json({success: false, message: e.message})
    }
}