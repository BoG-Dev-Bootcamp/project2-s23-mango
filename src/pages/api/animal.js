import createAnimal from "../../../server/mongodb/actions/createAnimal";

export default async function handler(req, res) {
    try {
        await createAnimal(req.body)
    } catch (e) {
        return res.status(500).json({success: false, message: e.message})
    }
    return res.status(201).json({success: true, message: "Successfully created an animal"})
}

