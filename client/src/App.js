
import './App.css';
import React from 'react'
import {Navigate, Route, Routes } from 'react-router-dom';
import ContentPage from './components/ContentPage';
import CathPage from './components/CathPage';
import SubscribePage from './components/SubscribePage'


function App (){

  const [auth, setAuth] = React.useState({
    auth: false,
    errorMsg: ''
  });

  return (

<>
<Routes>
  <Route  path="/" element={<CathPage />} />
  <Route path="Subscribe" element={<SubscribePage auth={auth} setAuth={setAuth} />}/>
  <Route path="ContentPage" element={!auth.auth ? <Navigate to='/'/> : <ContentPage/>}/>
</Routes>
</>
  )
}


export default App;


