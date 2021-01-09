const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex:true
        });
        console.log("Hello from database");
    }catch(error){
        console.log("Eror Cant find");
    }
}

module.exports = connectDB; 