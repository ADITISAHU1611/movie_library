const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoURI ='mongodb+srv://aditisahu1622:Movielist@cluster0.ztvzyln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectToMongo= async()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('Connected to MongoDB');
    }
);
}

module.exports = connectToMongo