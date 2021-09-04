import { useRouter } from 'next/router';
import {ActiveLink } from '../activeLink/index'
import { SignInButton } from '../SingInButton/SignInButton';
import styles from './styles.module.scss';


export function Header (){

const { asPath } = useRouter()


    return (
        <header className={styles.HeaderContainer}>
            <div className={styles.HeaderContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <ActiveLink href="/" activeClassName={styles.active} >                          
                        <a>Home</a>
                   </ActiveLink>
                    <ActiveLink href="/posts" activeClassName = {styles.active}>
                        <a >Posts</a>
                    </ActiveLink>


                                               
                </nav>   

                <SignInButton/>            
            </div>
        </header>
    )
}