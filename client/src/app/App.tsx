

=======
import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import Main from '../features/MainContent/Main';

import MainPage from '../features/Main/components/MainPage';

import Authorisation from '../features/Auth/components/Authorisation';
import Registrarion from '../features/Auth/components/Registrarion';

import NavBar from "../features/MainContent/NavBar";

import { useAppDispatch } from '../store/store';
import { checkUser } from '../features/Auth/authSlice';



function App(): JSX.Element {

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(checkUser()).catch(console.log)
  })
  


return(
  
  <div>
    <NavBar/>
  <Routes>

<Route path='/' element={<Main/>}/>
<Route path='/main' element={<MainPage/>}/>
<Route path='/' element={<Main/>}/>
<Route path='sign-up' element={<Authorisation/>} />
<Route path='sign-in' element={<Registrarion/>} />




  </Routes>
</div>
)


}

export default App;
