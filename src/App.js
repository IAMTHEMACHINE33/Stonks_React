import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Navbar_repe';
import Mid from './Components/Mid';
import Header from './Components/Header';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    {/* <Header></Header> */}
    <Mid></Mid>
    </BrowserRouter>
    </>
  );
}

export default App;
