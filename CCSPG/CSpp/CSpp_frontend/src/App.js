import React, {useState, Suspense} from 'react';
import './App.css';
// import loadable from '@loadable/component';
import Layout from './components/layout/layoutMain';
// const SplitMe = loadable(() => import('./components/loading/loading'), {
//   fallback: <div>로딩중..tttt.</div>
// });

function App() {
  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
