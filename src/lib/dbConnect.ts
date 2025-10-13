import mongoose from "mongoose"



type connectionStr = {
    isConnected?: number
}

const connection: connectionStr = {}

export async function dbConnect(): Promise<void>{ 
    if(connection.isConnected){
        console.log('Database is already connect!')
        return
    };

    try {
       const dbConnection = await mongoose.connect(process.env.MONGODB_URI || '' , {})
       connection.isConnected = dbConnection.connections[0].readyState;

       console.log('⚙ Database is connected successfully!')

    } catch (error) {
        console.log('Something went wrong while connecting to database ! ' , error)
        process.exit(1);
    }
}