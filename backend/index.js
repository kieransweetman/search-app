
import "./db/db.js"
import express, { Router } from "express";
import cors from "cors";
import { homeRouter } from "./routes/home.js";


const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:5173",
    }
))
app.use("/", homeRouter);

const PORT = 3000;

app.listen(PORT, console.log(`listening on port ${PORT}`));
