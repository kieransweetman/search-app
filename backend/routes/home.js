import { Router } from 'express';
import { API_BASE_URL } from "../utils/common.js";
import { SearchRequest } from '../models/search-request.js';

export const homeRouter = Router();

homeRouter.get("/", (req, res) => {
    res.send("Hello World");
});

/**
 * a route to handle POST search request from frontend
 */
homeRouter.post("/", (req, res) => {

    const searchQuery = req.query.search.toLowerCase();
    fetch(API_BASE_URL + `?search=${searchQuery}`, {
        method: "GET"
    }).then(async (response) => {
        const data = await response.json();

        data.results = data.results.filter((item) => {
            return item.name.toLowerCase().includes(searchQuery);
        });

        res.send(data)
        return data
    }).then(async (data) => {
        await saveSearchQuery(searchQuery);
    })
        .catch((error) => {
            console.error(error);
        })



});

const saveSearchQuery = async (searchQuery) => {
    const model = (await SearchRequest.create({ name: searchQuery })).save();
    return model;
}
