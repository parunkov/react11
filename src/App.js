import styles from './App.module.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Popin from './components/popin/Popin';
import { wifi, spiral } from './assets/svg';
import { useState } from 'react';

function App() {
  const pizes = [
    {image: './assets/scooter.png', text: 'Электросамокат'},
    {image: './assets/alisa.png', text: 'Колонка'},
    {image: './assets/wach.png', text: 'Смарт часы'}
  ];

  const [isPopinOpened, setPopinOpened] = useState(false);

  const titleHtml = window.innerWidth > 768 ?'участвуй<br>в акции и выигрывай призы!' : 'участвуй в акции и выигрывай призы!';

  return (
    <div className={styles.app}>
      <div className={styles.firstScreen}>
        <div className={styles.firstScreenContainer}>
          <div className={styles.bottleWrapper}>
            <img src={require('./assets/bottle.png')} alt="Напиток" className={styles.bottle} />
          </div>
          <div className={styles.prizeWrapper}>
            <img src={require('./assets/super.png')} alt="Призы" className={styles.prize} />
          </div>
          <div className={styles.leafWrapper}>
            <img src={require('./assets/leaf.png')} alt="Призы" className={styles.leaf} />
          </div>
          <Header callback={() => setPopinOpened(true)} />
          <h1 className={styles.title} dangerouslySetInnerHTML={{ __html:  titleHtml}} />
          <button className={styles.button}>участвовать</button>
          <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <img src={require('./assets/card2.png')} alt="Чип" className={styles.cardImage} />
            </div>
            <div className={styles.cardWifiWrapper} dangerouslySetInnerHTML={{ __html: wifi }} />
            <div className={styles.cardButton}>Главный приз</div>
            <div className={styles.cardSumm}>500 000 ₽</div>
          </div>
        </div>
      </div>
      <div className={styles.secondScreen}>
        <a name="second"></a>
        <div className={styles.container}>
          <div className={styles.spiralWrapper} dangerouslySetInnerHTML={{ __html: spiral }} />
          <div className={styles.lemonWrapper}>
            <img src={require('./assets/lemon.png')} alt="Лимон" className={styles.lemon} />
          </div>
          <h2 className={styles.secondTitle}>Выигрывай призы</h2>
          <h4 className={styles.guaranteeTitle}>Гарантированный приз</h4>
          <div className={styles.guarantee}>
            <div className={styles.guaranteeContainer}>
              <div className={styles.quaranteeImageWrapper}>
                <img src={require('./assets/yandex.png')} alt="Призы" className={styles.quaranteeImage} />
              </div>
              <div className={styles.guaranteeText}>Зарегистрируйте один чек
                и получите подписку
                Яндекс Плюс на 1 год</div>
            </div>
          </div>
          <h4 className={styles.prizesTitle}>Ежемесячный приз</h4>
          <div className={styles.prizesContainer}>
            {pizes.map((item) =><div className={styles.prizesItem} key={item.text}>
              <div className={styles.prizesImageWrapper}>
                <img src={require(`${item.image}`)} alt={item.text} className={styles.prizesImage} />
              </div>
              <div className={styles.prizesText}>{item.text}</div>
            </div>)}
          </div>
          <button className={styles.buttonSmall}>{window.innerWidth > 768 ? 'Загрузить чек' : 'участвовать'}</button>
          <Footer />
        </div>
      </div>
      {isPopinOpened ? <Popin /> : ''}
    </div>
  );
}

export default App;
