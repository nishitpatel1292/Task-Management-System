import mongoose from "mongoose";


export async function connection() {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_URI}`)
        .then(() => {
            console.log('connected to mongodb');
        })
        .catch((err) => {
            console.log('error connecting to mongodb', err);
        })

}