import { API_BASE_URL } from "./utils/common.js";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors(
    {
        origin: "http://localhost:5173",
    }
))

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

/**
 * a route to handle POST search request from frontend
 */
app.post("/", (req, res) => {
    const searchQuery = req.query.search.toLowerCase();

    fetch(API_BASE_URL + `?search=${searchQuery}`, {
        method: "GET"
    }).then(async (response) => {
        const data = await response.json();
        data.results = data.results.filter((item) => {
            return item.name.toLowerCase().includes(searchQuery);
        });
        res.send(data)
    }).catch((error) => {
        console.error(error);
    })

});



app.listen(PORT, console.log(`listening on port ${PORT}`));
