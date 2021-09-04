import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from 'stream'

async function buffer(readable: Readable ) {
    const chunks = [];

    for await  (const chunk of readable){
        chunks.push(
            typeof chunk === 'string' ? Buffer.from(chunk) : chunk
        )
    } 

    return Buffer.concat(chunks)
}

export const config = {
    api : {
        bodyParser : false 
    }
}

export default async (req:NextApiRequest , res :NextApiResponse) => {
     
if(req.method === 'POST'){
    const buf = await buffer(req)
    console.log('evento recebido')
    res.status(200);
 }
}