import styles from './Popin.module.scss';
import { popinCross, registerImage } from '../../assets/svg';
import { useState } from 'react';
import cn from 'classnames';

function Popin({ popinCallback }) {
    const [isButtonPressed, setButtonPressed] = useState(false);
    const [isNameValid, setNameValid] = useState(true);
    const [isLoginValid, setLoginValid] = useState(true);
    const [isPhoneValid, setPhoneValid] = useState(true);
    const [nameValue, setNameValue] = useState('');
    const [loginValue, setLoginValue] = useState('');
    const [phoneValue, setPhoneeValue] = useState('');
    const [isRegistred, setRegistred] = useState(false);

    const nameRegExp = /^[А-ЯЁ][а-яё]*([-][А-ЯЁ][а-яё]*)?\s[А-ЯЁ][а-яё]*\s[А-ЯЁ][а-яё]*$/;
    const loginRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const phoneRegExp = /^[\d\+][\d\(\)\ -]{4,14}\d$/;

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
        const consentChecked = document.querySelector('#form #rules1')?.checked;
        checkInput(nameInputValue, nameRegExp, setNameValid);
        checkInput(loginInputValue, loginRegExp, setLoginValid);
        checkInput(phoneInputValue, phoneRegExp, setPhoneValid);
        setButtonPressed(true);
        if (isNameValid && isLoginValid && isPhoneValid && consentChecked) {
            const requestBody = `login=${loginValue}&name=${nameValue}&phone=${phoneValue}&rules1=true`;

            fetch("https://promo-test.emlsdr.ru/backend/api/registerByEmail", {
                "headers": {
                    "accept": "application/json",
                    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                    "content-type": "application/x-www-form-urlencoded",
                    "sec-ch-ua": "\"Opera\";v=\"105\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin"
                },
                "referrer": "https://promo-test.emlsdr.ru/backend/swagger",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": requestBody,
                "method": "POST",
                "mode": "cors",
                // "credentials": "include"
            })
                .then(response => response.json())
                .then(request => {
                    console.log(request);
                    setRegistred(true);
                });
        }
    };

    const onOverlayClick = (event) => {
        if (event.target.closest('#popin')) return;
        popinCallback();
    }

    return (
        <div className={styles.overlay} onClick={onOverlayClick}>
            <div className={styles.popin} id="popin">
                {isRegistred
                    ? <div className={styles.registerImage} dangerouslySetInnerHTML={{ __html: registerImage }} /> : ''}
                <div className={styles.popinTitle}>{isRegistred ? 'Ваша регистрация прошла успешно!' : 'регистрация'}</div>
                {isRegistred
                    ? <div></div>
                    : <form className={styles.form} id="form">
                        <div className={cn(styles.inputGroup, isNameValid ? '' : styles.hasError)}>
                            <label htmlFor="name" className={styles.inputLabel}>ФИО</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Введите ФИО"
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
                                placeholder="Введите e-mail"
                                className={styles.input}
                                value={loginValue}
                                onChange={(event) => {
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
                                placeholder="+7"
                                className={styles.input}
                                value={phoneValue}
                                onChange={(event) => {
                                    setPhoneeValue(event.target.value);
                                    if (!isButtonPressed) return;
                                    checkInput(event.target.value, phoneRegExp, setPhoneValid);
                                }}
                                required
                            />
                            <div className={styles.errorMessage}>Неверный формат ввода поля</div>
                        </div>
                        <div className={styles.checkboxGroup}>
                            <input type="checkbox" name="rules1" id="rules1" className={styles.checkbox} />
                            <label htmlFor="rules1" className={styles.checkboxLabel}>Я согласен с <a href="/">правилами акции</a>, <a href="/">пользовательским&nbsp;соглашением</a> и&nbsp;с&nbsp;<a href="/">положением о конфиденциальности</a></label>
                        </div>
                        <button type="button" className={styles.button} onClick={onButtonClick}>Зарегистрироваться</button>
                    </form>
                }
                {isRegistred
                    ? <>
                        <div className={styles.registerText}>{`Добро пожаловать, ${nameValue}!`}</div>
                        <button type="button" className={styles.button} onClick={popinCallback}>Закрыть окно</button>
                    </>
                    : <div className={styles.popinText}>Есть аккаунт? <a href="/">Авторизуйся</a></div>
                }
                <div className={styles.popinCloseButton} dangerouslySetInnerHTML={{ __html: popinCross }} onClick={popinCallback} />
            </div>
        </div>
    );
};

export default Popin;
