// integrate of stripe with frontend

import {loadStripe} from '@stripe/stripe-js'


export async function getStripeJs(){
  const stripeJs = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)//public key of stripe   

  return stripeJs
}