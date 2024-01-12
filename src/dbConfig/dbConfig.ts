import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.connect("mongodb+srv://sharmaabhinash11:abhinash@cluster0.2r3wo4f.mongodb.net/?retryWrites=true&w=majority");
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        
    }


}