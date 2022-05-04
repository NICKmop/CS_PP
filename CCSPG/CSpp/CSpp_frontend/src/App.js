import logo from './logo.svg';
import './App.css';
import Content from './components/layout/content/content';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header> */}
      <Content></Content>
    </div>
  );
}

export default App;
