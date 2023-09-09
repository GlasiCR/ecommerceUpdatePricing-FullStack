import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

import { Database } from "./src/databaseConfig/DatabaseConfig.js"
import { router } from "./src/routes.js"

Database.initialize()
const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(3332, () => console.log("Server is running")) 