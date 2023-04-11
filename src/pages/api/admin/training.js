import { readTrainings } from "../../../../server/mongodb/actions/readTrainings"
import checkMethod from "../../../../server/utils/checkMethod"

export default async function handler(req, res) {
    const pageNumber = req.query.page;
    checkMethod(req, "GET")
    try {
        const trainings = await readTrainings(pageNumber)
        return res.status(200).json(trainings)
    } catch(e) {
        return res.status(500).json({success: false, message: e.message})
    }
}