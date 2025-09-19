import mongoose from "mongoose";


// Define the Note schema
const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true,
    },
},{timestamps: true}); // Add timestamps for createdAt and updatedAt

// Create the Note model
const Note = mongoose.model('Note', noteSchema);

export default Note;