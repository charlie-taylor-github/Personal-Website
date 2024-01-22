import React from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import '../styles/main.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
