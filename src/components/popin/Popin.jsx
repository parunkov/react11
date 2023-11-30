import styles from './Popin.module.scss';
import { popinCross } from '../../assets/svg';
import { useState } from 'react';
import cn from 'classnames';

function Popin() {
    const [isNameValid, setNameValid] = useState(true);
    const [isLoginValid, setLoginValid] = useState(true);
    const [isPhoneValid, setPhoneValid] = useState(true);

    const onButtonClick = () => {
        const nameInputValue = document.querySelector('#form #name')?.value;
        const loginInputValue = document.querySelector('#form #login')?.value;
        const phoneInputValue = document.querySelector('#form #phone')?.value;

    };

    return (
        <div className={styles.overlay}>
            <div className={styles.popin}>
                <div className={styles.popinTitle}>регистрация</div>
                <form className={styles.form} id="form">
                    <div className={cn(styles.inputGroup, isNameValid ? '' : 'hasError')}>
                        <label htmlFor="name" className={styles.inputLabel}>ФИО</label>
                        <input type="text" name="name" id="name" className={styles.input} required />
                        <div className={styles.errorMessage}>Неверный формат ввода поля</div>
                    </div>
                    <div className={cn(styles.inputGroup, isLoginValid ? '' : 'hasError')}>
                        <label htmlFor="login" className={styles.inputLabel}>E-mail</label>
                        <input type="text" name="login" id="login" className={styles.input} required />
                        <div className={styles.errorMessage}>Неверный формат ввода поля</div>
                    </div>
                    <div className={cn(styles.inputGroup, isPhoneValid ? '' : 'hasError')}>
                        <label htmlFor="phone" className={styles.inputLabel}>Телефон</label>
                        <input type="text" name="phone" id="phone" className={styles.input} required />
                        <div className={styles.errorMessage}>Неверный формат ввода поля</div>
                    </div>
                    <div className={styles.checkboxGroup}>
                        <input type="checkbox" name="rules1" id="rules1" className={styles.checkbox} />
                        <label htmlFor="rules1" className={styles.checkboxLabel}>Я согласен с <a href="/">правилами акции</a>, <a href="/">пользовательским&nbsp;соглашением</a> и&nbsp;с&nbsp;<a href="/">положением о конфиденциальности</a></label>
                    </div>
                    <button type="submit" className={styles.button} onClick={onButtonClick}>Зарегистрироваться</button>
                </form>
                <div className={styles.popinText}>Есть аккаунт? <a href="/">Авторизуйся</a></div>
                <div className={styles.popinCloseButton} dangerouslySetInnerHTML={{ __html: popinCross }} />
            </div>
        </div>
    );
};

export default Popin;
