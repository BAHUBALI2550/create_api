const mongoose = require("mongoose");

uri = "mongodb+srv://Himanshu:Dinesh%402550@himanshuapi.obt3feg.mongodb.net/HimanshuApi?retryWrites=true&w=majority";

const connectDB = () => {
    // console.log("conect db");
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = {connectDB};