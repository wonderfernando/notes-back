const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const app = express()
mongoose.connect('mongodb+srv://fernandowonder12345:WY8UrLoiIQc0tJ4y@cluster0.xrhydwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("banco de dados conecatado"));

const Notes = mongoose.model("notes", new mongoose.Schema({
    title: String,
    body: String,
    id: String
}))

app.use(cors())
app.use(express.json());

app.get("/notes", async (req,res) => { 
    const notes = await Notes.find()
    return res.json(notes, 200)
})

app.post("/notes", async function (req,res) {
 const newNote = await Notes.create({body:req.body.body, title:req.body.title, id:req.body.id})
    return res.json(newNote, 201)
})

app.delete("/notes", async function (req, res) {
    const newNote = await Notes.deleteOne({id:req.body.id})
    return res.json({"message":"nota apagada"}, 200)
})

app.listen(3333, function () {
    console.log("server is running")
})