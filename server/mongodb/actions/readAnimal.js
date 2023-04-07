import connectDB from "../index.js"
import Animal from "../models/animal.js"


export default async function readAnimal() {
    await connectDB();
    try {
        const animals = await Animal.find({})
        return animals
    } catch (e) {
        console.log(e)
        return []
    }
}
export {readAnimal}