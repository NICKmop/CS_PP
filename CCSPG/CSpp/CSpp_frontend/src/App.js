import logo from './logo.svg';
import './App.css';
import Content from './components/layout/content/content';
import Header from './components/layout/header/header';
import loadable from '@loadable/component';
import React, {useState, Suspense} from 'react';

const SplitMe = loadable(() => import('./components/loading/loading'), {
  fallback: <div>로딩중...</div>
});
// const loadingPage = React.lazy(() => import('./components/loading/loading'));

function App() {
  // const [visible, setVisible] = useState(false);
    // const onClick = () => {
    //     setVisible(true);
    // };
  return (
    <div className="App">
      {/* <p onClick={onClick}>click the other load page</p> */}
      {/* {visible && <SplitMe/>} */}
      <SplitMe/>
      {/* <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Content/> */}
    </div>
  );
}

export default App;
