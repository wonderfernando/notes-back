import { Note } from "../entities/Note";
import { INoteRepository } from "../IRepositories/INoteRepository";

 export class NoteDeleteUseCase {
    constructor(private noteRepository: INoteRepository) {}
    	async execute(id:string){
            const newNote = await this.noteRepository.index()
            return newNote
        }
}