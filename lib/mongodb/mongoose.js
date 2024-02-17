import mongoose from 'mongoose'

let isConnected = false // track conection status

export const connectToDB = async () => {
    mongoose.set("StrickQuery", true)

    if (isConnected) {
        console.log("MongoDB is already connected")
        return
    }

try {
    await mongoose.connect(process.env.MONGODB_URL, {
        dbName: "Vibezone",
        userNewUrlParser: true,
        useUnifiedTopology: true,
    })

    isConnected = true

    console.log("MongoDb is connected")
} catch (error) {
    console.log(error);
    }
}
