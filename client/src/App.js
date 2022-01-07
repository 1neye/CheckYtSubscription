
import './App.css';
import React from 'react'
import {Navigate, Route, Routes } from 'react-router-dom';
import ContentPage from './components/ContentPage';
import HomePage from './components/HomePage';


function App (){

  const [auth, setAuth] = React.useState(false);
  console.log(auth)

  return (

<>
<Routes>
  <Route path="/" element={<HomePage auth={auth} setAuth={setAuth}/>}/>
  <Route path="/ContentPage" element={!auth ? <Navigate to='/'/> : <ContentPage/>}/>
</Routes>

</>
  )
}


export default App;


