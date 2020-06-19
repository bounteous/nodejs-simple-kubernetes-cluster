import * as mongoose from 'mongoose';

const MONGO_URI: string = 'mongodb://root:toor@localhost:27017/robin_rover?authSource=admin';

export async function instanceDb(): Promise<void> {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`Connected to -> ${MONGO_URI}`);
    } catch (error) {
        throw error
    }
}