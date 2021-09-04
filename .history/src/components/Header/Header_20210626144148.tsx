import { Link} from 'next/link'
import { SignInButton } from '../SingInButton/SignInButton';
import styles from './styles.module.scss';


export function Header (){
    return (
        <header className={styles.HeaderContainer}>
            <div className={styles.HeaderContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <a className={styles.active} href="">Home</a>
                    <a  href="/posts">Posts</a>
                </nav>   

                <SignInButton/>            
            </div>
        </header>
    )
}