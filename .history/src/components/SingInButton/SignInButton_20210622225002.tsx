import styles from './styles.module.scss'
import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi';

import { signIn , signOut ,useSession } from 'next-auth/client'

export function SignInButton  () {

    const [session] = useSession() ;
    console.log(session)
    
 return session ? (



<button type="button" 
    className={styles.SignInButton}
    onClick={()=> signOut()}
    >
       <FaGithub color="#04d361"/> 
        {session}
        <FiX color="#737380" className={styles.closeIcon}/>
   </button>

 ): (

   <button type="button" 
className={styles.SignInButton}
onClick={() => signIn('github')}
>
   <FaGithub color="#eba417"/> 
    Sign in with Github
</button>



 )
}