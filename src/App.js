import styles from './App.module.scss';
import Header from './components/header/Header';
import { wifi } from './assets/wifi';

function App() {
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
          <Header />
          <h1 className={styles.title} dangerouslySetInnerHTML={{__html: 'участвуй<br>в акции и выигрывай призы!'}} />
          <button className={styles.button}>участвовать</button>
          <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <img src={require('./assets/card2.png')} alt="Чип" className={styles.cardImage} />
            </div>
            <div className={styles.cardWifiWrapper} dangerouslySetInnerHTML={{__html: wifi}} />
            <div className={styles.cardButton}>Главный приз</div>
            <div className={styles.cardSumm}>500 000 ₽</div>
          </div>
        </div>
      </div>
      <div className={styles.secondScreen}>
        <div className={styles.container}>
          <h2 className={styles.secondTitle}>Выигрывай призы</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
