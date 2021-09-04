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
                    <ActiveLink href="/">                         
                        <a className={ asPath === '/' ? styles.active : '' } >Home</a>
                   </ActiveLink>
                    <ActiveLink href="/posts" >
                        <a className={ asPath === '/posts' ? styles.active : '' } >Posts</a>
                    </ActiveLink>


                                               
                </nav>   

                <SignInButton/>            
            </div>
        </header>
    )
}