import mongoose from "mongoose"

export const Notes = mongoose.model("notes", new mongoose.Schema({
    title: String,
    body: String,
    id: String
}))
