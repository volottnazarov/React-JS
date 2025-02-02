import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting';
import CurrentTime from './components/currentTime';
import EventCard from './components/eventCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Изучаем REACT</p>
        <Greeting />
        <CurrentTime />
        <div>
          <EventCard title="Лекция" date="01-02-2025" location="библиотека" />
          <EventCard title="Собрание" date="10-02-2025" location="актовый зал" />
          <EventCard title="Экзамен" date="15-02-2025" location="кабинет 202" />
        </div>
      </header>
    </div>
  );
}

export default App;
