import styles from './Popin.module.scss';

function Popin() {
    return (
        <div className={styles.overlay}>
            <div className={styles.popin}>
                <div className={styles.popinTitle}>регистрация</div>
                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.inputLabel}>ФИО</label>
                        <input type="text" name="name" id="name" className={styles.input} required />
                        <div className={styles.errorMessage}>Неверный формат ввода поля</div>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="login" className={styles.inputLabel}>E-mail</label>
                        <input type="text" name="login" id="login" className={styles.input} required />
                        <div className={styles.errorMessage}>Неверный формат ввода поля</div>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="phone" className={styles.inputLabel}>Телефон</label>
                        <input type="text" name="phone" id="phone" className={styles.input} required />
                        <div className={styles.errorMessage}>Неверный формат ввода поля</div>
                    </div>
                    <div className={styles.checkboxGroup}>
                        <input type="checkbox" name="rules1" id="rules1" className={styles.checkbox} />
                        <label htmlFor="rules1" className={styles.checkboxLabel}>Я согласен с <a href="/">правилами акции</a>, <a href="/">пользовательским&nbsp;соглашением</a> и&nbsp;с&nbsp;<a href="/">положением о конфиденциальности</a></label>
                    </div>
                    <button type="submit" className={styles.button}>Зарегистрироваться</button>
                </form>
                <div className={styles.popinText}>Есть аккаунт? <a href="/">Авторизуйся</a></div>
            </div>
        </div>
    );
};

export default Popin;
