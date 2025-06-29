const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path: '../.env'});

 function DB(){
    try {
        console.log("MONGO_URI from env:", process.env.MONGO_URI);
        mongoose.connect(process.env.MONGO_URI)
        .then((conn)=>{console.log("Database Connected");})
        .catch((err)=>{console.log("error"+err);});
    } catch (error) {
      console.log(error);
    }
}

module.exports=DB;
