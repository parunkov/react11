import styles from './App.module.scss';
import Header from './components/header/Header';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.firstScreen}>
        <div className={styles.firstScreenContainer}>
          <div className={styles.bottleWrapper}>
            <img src={require('./assets/bottle.png')} alt="Напиток" className={styles.bottle} />
          </div>
          <Header />
          <h1 className={styles.title} dangerouslySetInnerHTML={{__html: 'участвуй<br>в акции и выигрывай призы!'}} />
            <button className={styles.button}>участвовать</button>
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
