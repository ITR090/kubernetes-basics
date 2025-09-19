
// models
import Note from "../models/Note.js"

export async function getAllNotes(req,res) {

    try {
        const notes = await Note.find().sort({createdAt: -1}) // Sort notes by createdAt in descending order
        if (!notes || notes.length === 0) { 
            return res.status(404).json({message:"No notes found"})
        }
        res.status(200).json(notes)
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
        console.log(error)   
    }

}

export async function getNoteById(req, res) {
    try {
        const { id } = req.params
        const note = await Note.findById(id)
        if (!note) {       
            return res.status(404).json({message:"Note not found"})
        }
        res.status(200).json(note)
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
        console.log(error)
    }
}

export async function createNote(req, res) {
    try {
        const { title, body } = req.body
        const note = new Note({ title, body })
        const savedNote  = await note.save()
        if (!savedNote ) {
            return res.status(400).json({message:"Failed to create note"})
        } 
        res.status(201).json({message:"Note created successfully"}) 
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
        console.log(error)
    }  
}

export async function updateNote(req, res) {
   try {
         const { title, body } = req.body
         const { id } = req.params
         const updateNote = await Note.findByIdAndUpdate(id, { title , body })  
         if (!updateNote) {
             return res.status(404).json({message:"Note not found"})
         }      
         res.status(200).json({message:"Note updated successfully"})
   } catch (error) {
        res.status(500).json({message:"Internal server error"})
        console.log(error)
   }
}       

export async function deleteNote(req, res) {
    try {
        const { id } = req.params
        const deletedNote = await Note.findByIdAndDelete(id)
        if (!deletedNote) {
            return res.status(404).json({message:"Note not found"})
        }
         // If the note was successfully deleted, send a success response
         // If the note was not found, send a 404 response
         // If there was an error, send a 500 response
        res.status(200).json({message:"Note deleted successfully"})
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
        console.log(error)
    }
}   