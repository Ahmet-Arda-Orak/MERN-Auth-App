const express = require("express");
const app = express();
const router = require("./routers/user.router")
const morgan = require("morgan");
const cors =require("cors");


const bodyParser = require("body-parser");
const port = process.env.port || 8080;
const session = require("express-session");

//Middleware

app.use(bodyParser.json());

app.use(
    session({
        secret: 'This is secret',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
}))

app.use(morgan("dev"));
app.use(cors());
app.use("/auth",router);

//ConnectDB
const connectDB =require("./models/connectDB");
connectDB();

//Listen
app.listen(port,()=>{
    console.log(`I am listening on port ${port}` )
})