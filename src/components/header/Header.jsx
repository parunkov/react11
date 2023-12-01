import styles from './Header.module.scss';
import { navData } from '../../data/navData';
import { logo, burger, cross } from '../../assets/svg';
import { useState } from 'react';

function Header({ callback }) {
    const [isNavOpened, setNavOpened] = useState(false);
    console.log(callback);

    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo} dangerouslySetInnerHTML={{ __html: logo }} />
                <nav className={styles.headerNav}>
                    {navData.map((item) => <a href={item.link} className={styles.navLink} key={item.text}>{item.text}</a>)}
                </nav>
                <button className={styles.button} onClick={callback}>Личный кабинет</button>
            </div>
            <div className={styles.mobileHeader}>
                <div className={styles.mobileLogo} dangerouslySetInnerHTML={{ __html: logo }} />
                <div className={styles.burger} dangerouslySetInnerHTML={{ __html: burger }} onClick={() => setNavOpened(true)} />
                <nav className={isNavOpened ? styles.mobileHeaderNav : styles.closedHeaderNav}>
                    <div className={styles.navContainer}>
                        {navData.map((item) => <a href={item.link} className={styles.navLink} key={item.text} onClick={() => setNavOpened(false)}>{item.text}</a>)}
                        <button
                            className={styles.button}
                            onClick={() => {
                                setNavOpened(false);
                                callback();
                            }}
                        >Личный кабинет</button>
                    </div>
                    <div className={styles.closeButton} dangerouslySetInnerHTML={{ __html: cross }} onClick={() => setNavOpened(false)} />
                    <div className={styles.palmWrapper}>
                        <img src={require('../../assets/palm.png')} alt="Пальма" className={styles.palm} />
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
