

import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () =>{

   // const url =`mongodb+srv://${USERNAME}:${PASSWORD}@clone-whatsapp.6zaksqo.mongodb.net/?retryWrites=true&w=majority`;
    const url =`mongodb+srv://${USERNAME}:${PASSWORD}@clone-whatsapp.6zaksqo.mongodb.net/?retryWrites=true&w=majority`;

    //const url =`mongodb+srv://Rakib:1234@clone-whatsapp.6zaksqo.mongodb.net/?retryWrites=true&w=majority`;
   // const url=`mongodb+srv://Rakib:1234@clone-whatsapp.6zaksqo.mongodb.net/`;
    try {
       await mongoose.connect(url , { useUnifiedTopology:true });
       //await mongoose.connect(url);
       console.log('Datyabaes connected successfully');
    }catch(error){

        console.log('Error while connecting with the database ', error.message);
    }

}
export default Connection;
