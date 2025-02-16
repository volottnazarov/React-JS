
import './App.css';
// import CommentsList from './components/commentsList';
// import Message from './components/message';
import TemperatureConverter from './components/temperatureConverter';
import TodoList from './components/todoList';


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
        <div>
          <h3>~ HomeWork 3 Seminar ~</h3>
          <TemperatureConverter />
          <TodoList />
        </div>
      </header>
    </div>
  );
}

export default App;
