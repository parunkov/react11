import styles from './Popin.module.scss';
import { popinCross } from '../../assets/svg';
import { useState } from 'react';
import cn from 'classnames';

function Popin() {
    const [isButtonPressed, setButtonPressed] = useState(false);
    const [isNameValid, setNameValid] = useState(true);
    const [isLoginValid, setLoginValid] = useState(true);
    const [isPhoneValid, setPhoneValid] = useState(true);
    const [nameValue, setNameValue] = useState('');
    const [loginValue, setLoginValue] = useState('');
    const [phoneValue, setPhoneeValue] = useState('');

    const nameRegExp = /^[А-ЯЁ][а-яё]*([-][А-ЯЁ][а-яё]*)?\s[А-ЯЁ][а-яё]*\s[А-ЯЁ][а-яё]*$/;
    const loginRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    const checkInput = (value, regExp, callback) => {
        if (value && value.match(regExp)) {
            callback(true);
        } else {
            callback(false);
        }
    }

    const onButtonClick = () => {
        const nameInputValue = document.querySelector('#form #name')?.value;
        const loginInputValue = document.querySelector('#form #login')?.value;
        const phoneInputValue = document.querySelector('#form #phone')?.value;
        checkInput(nameInputValue, nameRegExp, setNameValid);
        checkInput(loginInputValue, loginRegExp, setLoginValid);
        setButtonPressed(true);
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.popin}>
                <div className={styles.popinTitle}>регистрация</div>
                <form className={styles.form} id="form">
                    <div className={cn(styles.inputGroup, isNameValid ? '' : styles.hasError)}>
                        <label htmlFor="name" className={styles.inputLabel}>ФИО</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className={styles.input}
                            value={nameValue}
                            onChange={(event) => {
                                setNameValue(event.target.value);
                                if (!isButtonPressed) return;
                                checkInput(event.target.value, nameRegExp, setNameValid);
                            }}
                            required
                        />
                        <div className={styles.errorMessage}>Неверный формат ввода поля</div>
                    </div>
                    <div className={cn(styles.inputGroup, isLoginValid ? '' : styles.hasError)}>
                        <label htmlFor="login" className={styles.inputLabel}>E-mail</label>
                        <input
                            type="text"
                            name="login"
                            id="login"
                            className={styles.input}
                            value={loginValue}
                            onChange={(event) => {
                                console.log(event.target.value);
                                setLoginValue(event.target.value);
                                if (!isButtonPressed) return;
                                checkInput(event.target.value, loginRegExp, setLoginValid);
                            }}
                            required
                        />
                        <div className={styles.errorMessage}>Неверный формат ввода поля</div>
                    </div>
                    <div className={cn(styles.inputGroup, isPhoneValid ? '' : styles.hasError)}>
                        <label htmlFor="phone" className={styles.inputLabel}>Телефон</label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            className={styles.input}
                            required
                        />
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
