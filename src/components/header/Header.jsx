import styles from './Header.module.scss';
import { navData } from '../../data/navData';
import { logo, burger } from '../../assets/svg';

function Header() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo} dangerouslySetInnerHTML={{ __html: logo }} />
                <nav className={styles.headerNav}>
                    {navData.map((item) => <a href={item.link} className={styles.navLink} key={item.text}>{item.text}</a>)}
                </nav>
                <button className={styles.button}>Личный кабинет</button>
            </div>
            <div className={styles.mobileHeader}>
                <div className={styles.mobileLogo} dangerouslySetInnerHTML={{ __html: logo }} />
                <div className={styles.burger} dangerouslySetInnerHTML={{ __html: burger }}></div>
            </div>
        </>
    );
};

export default Header;
