//lib imports

import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

//custom imports
import {getHome ,getHealth,getNotFound} from "./controllers/other.js"
import { getFilm, postFilm ,getFilmById,deleteFilmById,updateFilmById} from './controllers/film.js';
import Film from './models/Film.js';


const app=express();
app.use(express.json());
app.use(cors());
const connectDB = async()=>{ 
    const conn =await mongoose.connect(
        process.env.MONGO_URL
        
    );
    if(conn){
        console.log("Connected to MongoDB");
    }
}



app.get("/" ,getHome);

app.get("/health" ,getHealth);

app.post("/films",postFilm);

app.get("/films",getFilm);
app.get("/films/:id",getFilmById);
app.delete("/films/:id",deleteFilmById);
app.put("/films/:id",updateFilmById)
app.get("*",getNotFound);



const PORT =process.env.PORT || 5000;



app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    connectDB();
});