// require('dotenv').config()
import dotenv from "dotenv"
import connectDB from "./db/index.js";
dotenv.config({
    path: './.env'
})



connectDB()
.then(()=>{
  app.listen(process.env.PORT || 7000, ()=>{
    console.log(`server is running ar port : ${process.env.PORT}`);
  })
})
.catch((err) =>{
  console.log("mongodb connection failed", err)
})


/*
import express from "express"
const app = express()

;( async ()=>{
  try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", (error) => {
      console.log("ERROR:", error)
      throw error
    })

    app.listen(process.env.PORT, ()=>{
      console.log(`app is listining on port: ${process.env.PORT}`)
    })

  } catch(error){
    console.error("ERROR: ", error)
    throw err
  }
})()
*/

