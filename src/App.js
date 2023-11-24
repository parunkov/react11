import './App.scss';
import Header from './components/header/Header';

function App() {
  return (
    <div className="app">
      <div className='firstScreen'>
        <div className='container'>
          <Header />
          <h1 className='title'>участвуй
            в акции и
            выигрывай призы!</h1>
            <button className='button'>участвовать</button>
        </div>
      </div>
      <div className='secondScreen'>
        <div className='container'>
          <h2 className='secondTitle'>Выигрывай призы</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
