import { readTrainings } from "../../../../server/mongodb/actions/readTrainings"

export default async function handler(req, res) {
    try {
        const trainings = await readTrainings()
        return res.status(200).json(trainings)
    } catch(e) {
        return res.status(500).json({success: false, message: e.message})
    }
}