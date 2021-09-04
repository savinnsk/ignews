import Link from 'next/link'
import { SignInButton } from '../SingInButton/SignInButton';
import styles from './styles.module.scss';


export function Header (){
    return (
        <header className={styles.HeaderContainer}>
            <div className={styles.HeaderContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <Link href="/">
                    </Link>
                    <Link href="/posts">
                    </Link>

                        <a className={styles.active} >Home</a>
                        <a  >Posts</a>
                </nav>   

                <SignInButton/>            
            </div>
        </header>
    )
}