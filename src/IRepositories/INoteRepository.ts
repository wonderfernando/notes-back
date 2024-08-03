import { Note } from "../entities/Note"

export interface INoteRepository {
    index() : Promise<Note[]>
    deleteOne(id: string): Promise<void>
    create(note: Note):Promise<Note>
}