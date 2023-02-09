import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './styles/App.css';
import Routes from './Routes';
import Providers from './Providers';
import Header from '../components/Header/Header';

function App() {
  return (
    <Providers>
      <Router>
        <Header />
        <Routes />
      </Router>
    </Providers>
  );
}

export default App;
