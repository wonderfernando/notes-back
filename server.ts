import express from "express"
const mongoose = require('mongoose')
import cors from "cors";
import {  NoteController } from "./src/controllers/NotesController";
const app = express()
mongoose.connect('mongodb+srv://fernandowonder12345:WY8UrLoiIQc0tJ4y@cluster0.xrhydwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("banco de dados conecatado"));
const noteController = new  NoteController()

app.use(cors())
app.use(express.json());

app.get("/notes", noteController.index)
app.post("/notes", noteController.create)
app.delete("/notes", noteController.deleteOne )
app.listen(3333, function () {
    console.log("server is running")
})