// import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting';
import CurrentTime from './components/currentTime';
import EventCard from './components/eventCard';
import Counter from './components/counter';
import TextInput from './components/textInput';
import TodoList from './components/todoList';
import Timer from './components/timer';
import CounterDuo from './components/counterDuo';
import MessagesList from './components/messageslist';
import ThemeSwitcher from './components/themeSwitcher';
import TextDisplayForm from './components/textDisplayForm';
import Box from './components/box';
import pic from './img/smile.png';
import LiElements from './components/liElements';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from './components/detailPage';
import { dataRoute } from './components/dataRoute';
import ListPage from './components/listPage';
import GrandParent from '../../seminar5app/src/components/context';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Изучаем REACT</h1>
        <h3 className='App-seminar'>Семинар 1</h3>
        <Greeting />
        <CurrentTime />
        <div className='App-eventCard'>
          <EventCard title="Лекция" date="01-02-2025" location="библиотека" />
          <EventCard title="Собрание" date="10-02-2025" location="актовый зал" />
          <EventCard title="Экзамен" date="15-02-2025" location="кабинет 202" />
        </div>
        <h3 className='App-seminar'>Семинар 2</h3>
        <Counter />
        <TextInput />
        <TodoList />
        <Timer />
        <h3 className='App-seminar'>Семинар 3</h3>
        <CounterDuo />
        <h4>*** Мессенджер ***</h4>
        <MessagesList />
        <h4>Переключатель темы</h4>
        <ThemeSwitcher />
        <h4>Отображение текста</h4>
        <TextDisplayForm />
        <h3 className='App-seminar'>Семинар 4</h3>
        <h4>Children</h4>
        <Box>
          <p>Текст внутри</p>
          <button>Кнопка внутри</button>
        </Box>
        <p>Текст снаружи</p>
        <Box><img src={pic} alt='smile'/></Box>
        <h4>Render props</h4>
        <LiElements />
        <h4>Router-dom</h4>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ListPage />}></Route>
            <Route path='detail/:id' element={<DetailPage items={dataRoute} />}></Route>
          </Routes>
        </BrowserRouter>
        <h3 className='App-seminar'>Семинар 5</h3>
        <h4>Context</h4>
        <div>
          <GrandParent />
        </div>
      </header>
    </div>
  );
}

export default App;
