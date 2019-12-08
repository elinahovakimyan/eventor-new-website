import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/common/Header';
import Routes from './Routes';
import { store } from './store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />

        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
