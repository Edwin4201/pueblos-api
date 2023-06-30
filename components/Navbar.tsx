import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css';

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'Acerca de',
        href: '/about'
    },
    {
        text: 'Contacto',
        href: '/contact'
    },

];

export const Navbar = () => {
    return (
        <nav className={styles['menu-container']}>
            {
                menuItems.map(({ text, href }) => (
                    <ActiveLink key={href} text={text} href={href} />
                ))

            }

            {/* 
        <ActiveLink text="Home" href="/" />
        <ActiveLink text="About" href="/about" />
        <ActiveLink text="Contact" href="/contact" /> 
        <ActiveLink text="Pricing" href="/pricing" />  
        */}
        </nav>
    );
};