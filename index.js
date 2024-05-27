const express=require('express');
const path=require("path");
const bodyParser=require('body-parser');
const dotenv=require("dotenv");
const mongoose=require("mongoose");
dotenv.config({ path: './.env' });
var session = require('express-session')
const main=async()=>{
    await mongoose.connect(process.env.DB_URL);

}
main().catch((err)=>{
    console.log(err);
})
const app=express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret: 'abcd', cookie: { maxAge: 60000 }}))
app.use(express.static(path.join(__dirname,"public")))
app.use(bodyParser.json());
app.use("/crud",require("./Routes/crud.routes"));

app.listen(3500,()=>{
    console.log("Server is running @3500");
})