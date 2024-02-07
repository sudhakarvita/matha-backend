import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import adminRoutings from "./admin/login/index.js"
import customerRoutings from "./customer/login/index.js"
import framesRoutings from "./admin/frames/index.js"
import verifyToken from "./jwt/verifyToken.js"
import imgRoutings from "./customer/photos-upload/index.js"


const app = express()
dotenv.config()
app.use(express.json());

app.use('/admin', adminRoutings);
app.use('/customer', customerRoutings);
app.use( '/frames', framesRoutings);
app.use( '/photo', imgRoutings);
app.use(verifyToken);

mongoose.connect(process.env.DB_URL)
    .then( console.log('db connected succesfully'))
    .catch(err =>{
            console.log('error',err)
    })

//port    

app.listen(5000,()=>{
    console.log(`Server on http://localhost:${process.env.port}`)
});



