import './App.css';
import Context from './components/context';
import { Counter } from './components/counter';
import WithLoadingIndicator from './components/withLoadingIndicator';
import React from 'react';
import { store, storeTheme } from './components/store';
import { Provider } from "react-redux";
import ToggleTheme from './components/toggleTheme';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2 className='App-seminar'>Семинар 5</h2>
      <h4>Context</h4>
      <Context />
      <h4>HOC</h4>
      <WithLoadingIndicator />
      <h4>Redux</h4>
      <Provider store={store}>
        <Counter />
      </Provider>
      <h4>HomeWork 5</h4>
      <Provider store={storeTheme}>
        <ToggleTheme />
      </Provider>
      </header>
    </div>
  );
}

export default App;
