import mongoose from "mongoose"

const animalSchema = new mongoose.Schema ({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }, 
    name: {
        type: String,
        required: true
    }, hoursTrained: { 
        type: Number,
        required: true
    }, 
    owner: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    }, 
    dateOfBirth: {
        type: Date
    }, profilePicture: {
        type: String
    }
  })

  export default mongoose.models?.Animal || mongoose.model("Animal", animalSchema)

