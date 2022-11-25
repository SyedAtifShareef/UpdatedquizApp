import React from 'react';
import {Route,Routes } from 'react-router-dom';
import StartPage from './startPage';
import InfoPage from './infoPage';
import FinalPage from './finalPage';
function App() {


  
  return (
    <>
    <Routes>
      <Route path='/' element={<StartPage/>} />
      <Route path='/infoPage' element={<InfoPage/>}/>
      <Route path='/finalPage' element={<FinalPage/>}/>
    </Routes>
    </>
  )
}

export default App
