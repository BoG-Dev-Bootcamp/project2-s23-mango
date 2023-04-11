import { readAnimal } from "../../../../server/mongodb/actions/readAnimal"


export default async function handler(req, res) {
    const pageNumber = req.query.page;
    try {
        let animals = await readAnimal(pageNumber)
        return res.status(200).json(animals)
    } catch (e) {
        return res.status(500).json({success: false, message: e.message})
    }
}
