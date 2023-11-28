import styles from './Header.module.scss';
import { navData } from '../../data/navData';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="137" height="33" viewBox="0 0 137 33" fill="none">
                    <path d="M26.2801 27H18.8801L17.9201 24.8H8.44008L7.48008 27H0.0800781L12.0801 0.119995H14.2801L26.2801 27ZM10.8801 19.28H15.4801L13.2001 13.2L10.8801 19.28Z" fill="white" />
                    <path d="M35.8873 12.56L44.6073 0.599996H52.6073L43.5273 13.16L54.0873 27H45.9273L35.8873 13.84V27H29.0073V0.599996H35.8873V12.56Z" fill="white" />
                    <path d="M79.4198 20.8H83.1398V32.64H76.2598V27H56.8198V0.599996H63.6998V20.8H72.5398V0.599996H79.4198V20.8Z" fill="white" />
                    <path d="M110.385 27H103.505V13.24L88.7854 27.48H86.5854V0.599996H93.4654V14.24L108.185 0.119995H110.385V27Z" fill="white" />
                    <path d="M136.368 27H129.488V20.08H126.728H125.968L121.488 27H113.808L119.648 18C118.448 17.1467 117.501 16.0667 116.808 14.76C116.141 13.4533 115.808 11.96 115.808 10.28C115.808 8.81333 116.088 7.48 116.648 6.28C117.208 5.08 117.968 4.06666 118.928 3.24C119.915 2.38666 121.075 1.73333 122.408 1.28C123.741 0.826662 125.181 0.599996 126.728 0.599996H136.368V27ZM126.608 6.6C125.461 6.6 124.541 6.94666 123.848 7.64C123.155 8.33333 122.808 9.22666 122.808 10.32C122.808 11.44 123.155 12.3467 123.848 13.04C124.541 13.7333 125.461 14.08 126.608 14.08H129.488V6.6H126.608Z" fill="white" />
                </svg>
            </div>
            <nav className={styles.headerNav}>
                {navData.map((item) => <a href={item.link} className={styles.navLink} key={item.text}>{item.text}</a>)}
            </nav>
            <button className={styles.button}>Личный кабинет</button>
        </div>
    );
};

export default Header;
