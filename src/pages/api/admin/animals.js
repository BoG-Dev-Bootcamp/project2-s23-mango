import { readAnimal } from "../../../../server/mongodb/actions/readAnimal"


export default async function handler(req, res) {
    try {
        let animals = await readAnimal()
        return res.status(200).json(animals)
    } catch (e) {
        return res.status(500).json({success: false, message: e.message})
    }
}
