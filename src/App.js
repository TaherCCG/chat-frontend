import logo from './cupid.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ask help from Cupid?
        </a>
      </header>
    </div>
  );
}

export default App;
