import mongoose from "mongoose";

const SearchRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

});

export const SearchRequest = mongoose.model("search-request", SearchRequestSchema);
