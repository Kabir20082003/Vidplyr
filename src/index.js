//require('dotenv').config({path: './env'})

import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
    path : './env'
})
  

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("error in express app")
        throw error
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Listening on port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("mongodb connection error : ",error)
})

//First approach - code for connecting database in index.js only. 
// Better approach to keep code for db connection in a different folder.
//IIFE - immediately invoked function expression - as soon as index.js is executed , this function is immediately executed
/*

const app = express();

;( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("Error : ",error);
            throw error;
        })

        app.listen(process.env.PORT , ()=>{
            console.log("App is listening on port ", process.env.PORT );
        })
    }
    catch(error){
        console.error("Error : ",error);
        throw error;
    }
})()
*/