import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'
import { SignInButton } from '../SingInButton/SignInButton';
import styles from './styles.module.scss';


export function Header (){

const {} = useRouter()


    return (
        <header className={styles.HeaderContainer}>
            <div className={styles.HeaderContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <Link href="/">                         
                        <a className={styles.active} >Home</a>
                   </Link>
                    <Link href="/posts">
                        <a  >Posts</a>
                    </Link>


                                               
                </nav>   

                <SignInButton/>            
            </div>
        </header>
    )
}