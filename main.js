import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import adminRoutings from "./admin/login/index.js"
import customerRoutings from "./customer/login/index.js"
import framesRoutings from "./admin/frames/index.js"
import verifyToken from "./jwt/verifyToken.js"
import imgRoutings from "./customer/photos-upload/index.js"


const app = express()
dotenv.config()
app.use(express.json());
app.use(cors())

let corsOptions = {
    origin: [ 'http://localhost:5000', ]
};

app.use('/admin', cors(corsOptions), adminRoutings);
app.use('/customer', cors(corsOptions), customerRoutings);
app.use( '/frames', cors(corsOptions), framesRoutings);
app.use( '/photo', cors(corsOptions), imgRoutings);
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



