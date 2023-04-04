import createTrainingLog from "../../../server/mongodb/actions/createTrainingLog";
// import checkMethod from "@/middleware"

export default async function handler(req, res) {
    // checkMethod(req)
    try {
        await createTrainingLog(req.body)
    } catch (e) {
        return res.status(500).json({success: false, message: e.message})
    }
    return res.status(201).json({success: true, message: "new log created"})
}