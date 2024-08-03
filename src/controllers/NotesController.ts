import { Request, Response } from "express"
import { Notes } from "../models/Note"
import { INoteRepository } from "../IRepositories/INoteRepository";
import { NoteRepositoryMongoose } from "../repositories/NoteRepositoryMongoose";
import { NoteCreateUseCase } from "../useCases/NoteCreateUseCase";
import { NoteDeleteUseCase } from "../useCases/NoteDeleteOneUseCase";


export class NoteController {
    private noteRepository: INoteRepository;
    
    constructor() {
        this.noteRepository = new NoteRepositoryMongoose();
    }
    public index = async (req: Request,res:Response) => { 
        const notes = await Notes.find()
        return res.status(200).json(notes)
    }

    public deleteOne = async (req: Request,res:Response) => {
      const noteCreateUseCase = new NoteDeleteUseCase(this.noteRepository)  
      noteCreateUseCase.execute(req.body.id)
      return res.status(200).json({"message":"nota apagada"})
    }

    public create = async (req: Request,res:Response) => {
        const noteCreateUseCase = new NoteCreateUseCase(this.noteRepository)
        const newNota = await noteCreateUseCase.execute({body:req.body.body, title:req.body.title, id:req.body.id})
        return res.status(201).json(newNota)
    }    
}
