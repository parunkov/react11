import styles from './App.module.scss';
import Header from './components/header/Header';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.firstScreen}>
        <div className={styles.container}>
          <Header />
          <h1 className={styles.title}>участвуй
            в акции и
            выигрывай призы!</h1>
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
