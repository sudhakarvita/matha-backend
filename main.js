import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import adminRoutings from "./admin/login/index.js"
import customerRoutings from "./customer/login/index.js"
import verifyToken from "./jwt/verifyToken.js"
import uploadphotoRoutings from "./customer/photos-upload/index.js"
import cartRoutings from "./customer/cart/index.js"
import sizesRoutings from "./admin/Frames size/index.js"
import thicknessRoutings from "./admin/Frames thickness/index.js"
import priceRoutings from "./admin/Frames Price/index.js"
const app = express()
dotenv.config()
app.use(express.json());
app.use(cors())
let corsOptions = {
    origin: ['http://78.142.47.247:8000',]
};
app.use('/admin', cors(corsOptions), adminRoutings);
app.use('/customer', cors(corsOptions), customerRoutings);
app.use('/photo', cors(corsOptions), uploadphotoRoutings);
app.use('/cart', cors(corsOptions), cartRoutings);
app.use('/size', cors(corsOptions), sizesRoutings);
app.use('/thickness', cors(corsOptions), thicknessRoutings);
app.use('/price', cors(corsOptions), priceRoutings);
app.use(verifyToken);
mongoose.connect(process.env.DB_URL)
    .then(console.log('db connected succesfully'))
    .catch(err => {
        console.log('error', err)
    })
app.listen(process.env.PORT, () => {
    console.log(`Server on http://78.142.47.247:${process.env.PORT}`)
});