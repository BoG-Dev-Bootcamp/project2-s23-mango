import mongoose from "mongoose"

const trainingLogSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: false
    },
   
    hours: {
        type: Number,
        required: false
    },
    animal: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    trainingLogVideo: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    }
})

export default mongoose.models?.Training || mongoose.model("Training", trainingLogSchema)