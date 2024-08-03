import { Note } from "../entities/Note";
import { INoteRepository } from "../IRepositories/INoteRepository";
import { Notes } from "../models/Note";

export class NoteRepositoryMongoose implements INoteRepository{

    async create(note: Note): Promise<Note> {
        const newNote = await Notes.create({body:note.body, title:note.title, id:note.id})
        return newNote
    }
    async deleteOne(id: string): Promise<void> {
        const newNote = await Notes.deleteOne({id:id})
    }
    async index(): Promise<Note[]> {
        const notes = await Notes.find()
        return notes
    }
    
}