import React from 'react';
import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';


function App() {
  return (
    <div className="bg-black">
      <Header/>
      <Body/>
      <Footer/>
      
    </div>
  );
}

export default App;