import logo from './logo.svg';
import { konyvekLista } from './adatok';
import Kartyak from './components/Kartyak';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1>
      </header>
      <main>
        <article>
          <Kartyak lista={konyvekLista}/>
        </article>
        <footer><p>Horváth Nauzika</p></footer>
      </main>

    </div>
  );
}

export default App;
