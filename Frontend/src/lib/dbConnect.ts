// import mongoose from 'mongoose';

type ConnectionObj = {
    isConnected?: number
}

const connection: ConnectionObj = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log('already connected')
    }
    try {
        // const db = await mongoose.connect(process.env.MONGO_URI || '',{})

        // connection.isConnected = db.connections[0].readyState
    } catch (err) {

    }
}