import { Note } from "../entities/Note";
import { INoteRepository } from "../IRepositories/INoteRepository";

 export class NoteCreateUseCase {
    constructor(private noteRepository: INoteRepository) {}
    	
    async execute(note: Note){
        const newNote = await this.noteRepository.create(note)
        return newNote
    }
}