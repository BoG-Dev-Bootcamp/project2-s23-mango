import connectDB from "../index.js"
import Training from "../models/trainingLog.js"


const readTrainings = async () => {
    await connectDB()
    try {
        const trainings = await Training.find({})
        return trainings
    } catch(e) { 
        console.log(e)
    }
}
export {readTrainings}