import logo from './logo.svg';
import './App.css';
import Message from './components/message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HomeWork 1 Seminar
        </p>
        <div>
        <Message text="Привет Медвед!"/>
        </div>
      </header>
    </div>
  );
}

export default App;
