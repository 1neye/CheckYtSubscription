
import './App.css';
import React from 'react'
import {Route, Routes } from 'react-router-dom';
import ContentPage from './components/ContentPage';
import HomePage from './components/HomePage';


function App (){

  let  state = {
    isAuth: true
  };


  return (

<>
<Routes>
  <Route path="/" element={<HomePage />}/>
  {state.isAuth ? <Route path="/ContentPage" element={<ContentPage />}/>: null}
</Routes>

</>
  )
}


export default App;


