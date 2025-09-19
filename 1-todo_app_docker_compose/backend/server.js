import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import notesRoutes from './routes/notesRoutes.js'

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
console.log(`Current directory: ${__dirname}`); // log the current directory

// Initialize the express app
const app = express()
// Middleware
app.use(express.json())
app.use(cors())
dotenv.config()

// Load environment variables from .env file based on the NODE_ENV value
if (process.env.NODE_ENV === 'development') {
    console.log("in dev env");
    dotenv.config({ path: './env/.env.development' });
} else {
    console.log("in prod env");
    dotenv.config({ path: './env/.env.production' });
}

// to server react frotent
// this required so BE can know where are FE files .
app.use(express.static(path.join(__dirname, 'dist')));

const logFilePath = path.join(__dirname, 'logs', 'app.log');


//our simple custom middleware
app.use((req, res, next) => {
    // Log the request method and URL
    fs.appendFileSync(logFilePath, `Req method is ${req.method} & Req URL is ${req.url}\n`, err => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
    //fs.writeFileSync('logs.txt', `Req method is ${req.method} & Req URL is ${req.url}\n`, { flag: 'a' });
    // Log to console as well
    console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
    next();
});

// DB connection
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error('Error connecting to MongoDB:', error)
    }
}
connectDB()

// Routes
app.use('/api/notes', notesRoutes)

// Start the server
app.listen(process.env.NODE_PORT, () => {
    console.log(`APP is listening for requests on port ${process.env.NODE_PORT}`)
})