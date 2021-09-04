import Link from 'next/link'
import { ReactElement } from 'react'

interface ActiveLinkProps {

    children : ReactElement
    activeClassName : string ;

}


export function ActiveLink(){
   return (
       <Link></Link>
   )
}