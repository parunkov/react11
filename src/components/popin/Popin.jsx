import styles from './Popin.module.scss';

function Popin() {
    return (
        <div className={styles.overlay}>
            <div className={styles.popin}>
                <div className={styles.popinTitle}>регистрация</div>
            </div>
        </div>
    );
};

export default Popin;
