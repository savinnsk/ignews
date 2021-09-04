import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";
import { getSession }from 'next-auth/client' //cookies
import { query as q} from 'faunadb'
import { fauna } from "../../services/faunadb";

// to checkout


type User = {
    ref:{
        id:string;
    }
    data : {
        stripe_customer_id : string;
    }

}


export default async (req :NextApiRequest ,res : NextApiResponse) => {
    if(req.method === "POST"){
// creating a user in stripe from faunadb
        const session = await getSession({ req })
     
     
        
        const user = await fauna.query<User>(
            q.Get(
                q.Match(
                    q.Index('user_by_email'),
                    q.Casefold(session.user.email)
                )
            )
        )

        let custumerId = user.data.stripe_customer_id

        if(!custumerId){
            const StripeCustomer = await stripe.customers.create({
                email: session.user.email, // add email from fauna in stripe's costumer registration 
            }) 



        await fauna.query(

            q.Update(
                q.Ref(q.Collection('users'),user.ref.id),
                {
                    data:{
                        stripe_customer_id: StripeCustomer.id
                    }
                }
            )

        )

        custumerId = StripeCustomer.id
       

        }

         const StripeCheckoutSession = await stripe.checkout.sessions.create({
             customer:custumerId, //id in stripe
             payment_method_types:['card'],
             billing_address_collection:'required',
             line_items:[
                 {price :'price_1Iwt4vHOoxQ5A0OnPDQSnGgQ',quantity :1 }
             ],
             mode: 'subscription',
             allow_promotion_codes:true,
             success_url: process.env.STRIPE_SUCCESS_URL,
             cancel_url : process.env.STRIPE_CANCEL_URL,

         });

         return res.status(200).json({sessionId : StripeCheckoutSession.id})
    }else {
        res.setHeader("Allow" ,"POST")
        res.status(405).end('Method not allowed')
    }
}