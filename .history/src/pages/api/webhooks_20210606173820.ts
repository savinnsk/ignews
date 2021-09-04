import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from 'stream'
import Stripe from "stripe";
import stripe from '../../services/stripe'

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
    const secret = req.headers['stripe-signature']

    let event: Stripe.Event //events from webhooks

    try {
        event = stripe.webhooks.constructEvent(buf ,secret , process.env.STRIPE_WEBHOOK_SECRET)
    } catch (e) {
        return res.status(404).send(`Webhook error : ${e.message}`)
    }
    
    res.status(200);
 }else {
    res.setHeader("Allow" ,"POST")
    res.status(405).end('Method not allowed')
 }
}