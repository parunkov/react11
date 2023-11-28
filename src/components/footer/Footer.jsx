import styles from './Footer.module.scss';
import { navData } from '../../data/navData';

function Footer() {
    return (
        <div className={styles.footer}>
            {navData.map((item) => <a href={item.link} className={styles.navLink} key={item.text}>{item.text}</a>)}
        </div>
    )
};

export default Footer;
