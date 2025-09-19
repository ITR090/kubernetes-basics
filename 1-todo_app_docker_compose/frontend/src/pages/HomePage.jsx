import { useState, useEffect } from 'react'
import toast from "react-hot-toast";
// components
import Navbar from '../components/Navbar'
import NoteCard from '../components/NoteCard';
import NotesNotFound from '../components/NotesNotFound';
// lib
import api from "../lib/axios";

const HomePage = () => {

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchNotes = async () => {
      try {
        const res = await api.get('/notes');
        console.log("Response status:", res);
        if (res.status !== 200) {
          throw new Error('Failed to fetch notes');
        }
        console.log(res.data);
        setNotes(res.data);
      } catch (error) {
        console.log("Error fetching notes");
        console.log(error);
        if (error.response?.status === 429) {
          toast.error("Too many requests: Please try again later.");
        } else if (error.status === 404) {
          // toast.error("ERR_BAD_REQUEST");
          console.log("ERR_BAD_REQUEST");
        }  else if (error.message) {
           toast.error(error.message);
        }  else if (error.status === 500){
           console.log("Internal Server Error");
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };

    setTimeout(() => {
      fetchNotes();
    }, 2000)

  }, []);
  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto p-4 mt-6">

        {loading && <div className="text-center text-primary py-10">Loading notes...</div>}

        {!loading && notes.length === 0 && <NotesNotFound />}

        {notes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default HomePage
