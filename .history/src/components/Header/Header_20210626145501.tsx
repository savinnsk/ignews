import { useRouter } from 'next/router';
import Link from 'next/link'
import { SignInButton } from '../SingInButton/SignInButton';
import styles from './styles.module.scss';


export function Header (){

const { asPath } = useRouter()


    return (
        <header className={styles.HeaderContainer}>
            <div className={styles.HeaderContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <Link href={ asPath === '/' ? styles.active : '' }>                         
                        <a className={styles.active} >Home</a>
                   </Link>
                    <Link href="/posts" >
                        <a { asPath === '/posts' ? styles.active : '' } >Posts</a>
                    </Link>


                                               
                </nav>   

                <SignInButton/>            
            </div>
        </header>
    )
}