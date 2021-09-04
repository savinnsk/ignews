import { SignInButton } from '../SingInButton/SignInButton';
import styles from './styles.module.scss';
import Link from 'next/link'


export function Header (){
    return (
        <header className={styles.HeaderContainer}>
            <div className={styles.HeaderContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <Link className={styles.active} href="/">Home</Link>
                    <Link href="/posts" >Posts</ Link>
                </nav>   

                <SignInButton/>            
            </div>
        </header>
    )
}