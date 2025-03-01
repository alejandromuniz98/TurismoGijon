import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';
import Ver from './components/Ver';
import Actividades from './components/Actividades';
import Comer from './components/Comer';

function App() {
  return (
    <div className="App">
      <Header />
      <Ver/>
      <Actividades/>
      <Comer/>
      <Footer />
    </div>
  );
}

export default App;
