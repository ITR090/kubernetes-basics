import express from 'express'
import { getAllNotes, createNote, updateNote, deleteNote, getNoteById } from '../controllers/notesControllers.js'
const router = express.Router()

// Sample routes for notes
// These will be replaced with actual database operations later
router.get('/', getAllNotes)
router.get('/:id', getNoteById)
router.post('/', createNote)
router.put('/:id', updateNote)
router.delete('/:id', deleteNote)

export default router