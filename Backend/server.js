// eslint-disable-next-line
import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import morgan from "morgan"
import colors from "colors"



dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_DEV === "development") {
    app.use(morgan("dev"))
  }
  
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Api Is Runnning")
  })

  const PORT = process.env.PORT || 5000
  app.listen(
    PORT,
    console.log(
      `Server Running in ${process.env.NODE_DEV} mode on port ${PORT}`.yellow.bold
    )
  )
  