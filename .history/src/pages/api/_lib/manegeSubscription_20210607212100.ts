import {fauna} from '../../../services/faunadb'
import {query as q} from 'faunadb'

export async function saveSubscription(
    subscriptionId : string,
    customerId : string 
){
    const userRef = await fauna
} 