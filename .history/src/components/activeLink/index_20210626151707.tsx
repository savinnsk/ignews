import Link , {LinkProps} from 'next/link'
import { ReactElement } from 'react'
import { useRouter } from 'next/router';

interface ActiveLinkProps extends LinkProps {

    children : ReactElement
    activeClassName : string ;

}

const { asPath } = useRouter()


export function ActiveLink({ children , activeClassName , ...rest } : ActiveLinkProps ){
   return (
       <Link {...rest}>
           {children}
       </Link>
   )
}