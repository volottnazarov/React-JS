import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import CommentsList from './components/commentsList';
// import Message from './components/message';
// import TemperatureConverter from './components/temperatureConverter';
// import TodoList from './components/todoList';
import HomePage from './components/homePage';
import AboutPage from './components/aboutPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div>
          <h3>~ HomeWork 1 Seminar ~</h3>
          <Message text="Привет Медвед!"/>
          <h3>* * *</h3>
        </div>
        <div>
          <h3>~ HomeWork 2 Seminar ~</h3>
          <CommentsList />
          <h3>* * *</h3>
        </div> */}
        {/* <div>
          <h3>~ HomeWork 3 Seminar ~</h3>
          <TemperatureConverter />
          <TodoList />
        </div> */}
        <div>
          <h3>~ HomeWork 4 Seminar ~</h3>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path="*" element={<h2>Ресурс не найден</h2>} />
            </Routes>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;
