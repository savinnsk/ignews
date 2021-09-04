import Link , {LinkProps} from 'next/link'
import { ReactElement } from 'react'
import { useRouter } from 'next/router';

interface ActiveLinkProps extends LinkProps {

    children : ReactElement
    activeClassName : string ;

}

const { asPath } = useRouter()
const className = asPath=== rest.href ? activeClassName

export function ActiveLink({ children , activeClassName , ...rest } : ActiveLinkProps ){
   return (
       <Link {...rest}>
           {children}
       </Link>
   )
}