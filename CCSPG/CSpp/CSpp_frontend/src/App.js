import logo from './logo.svg';
import './App.css';
import Content from './components/layout/content/content';
import Header from './components/layout/header/header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Content></Content>
    </div>
  );
}

export default App;
