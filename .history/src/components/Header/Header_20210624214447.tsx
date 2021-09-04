import { SignInButton } from '../SingInButton/SignInButton';
import styles from './styles.module.scss';
import {Link} from 'react'


export function Header (){
    return (
        <header className={styles.HeaderContainer}>
            <div className={styles.HeaderContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <a className={styles.active} href="">Home</a>
                    <Link href="/posts">Posts</Link>
                </nav>   

                <SignInButton/>            
            </div>
        </header>
    )
}