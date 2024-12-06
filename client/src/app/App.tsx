import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../features/MainContent/Main';

import MainPage from '../features/Main/components/MainPage';

import Authorisation from '../features/Auth/components/Authorisation';
import Registrarion from '../features/Auth/components/Registrarion';


function App(): JSX.Element {
return(
  <Routes>

<Route path='/' element={<Main/>}/>
<Route path='/main' element={<MainPage/>}/>
=======
<Route path='/' element={<Main/>}>
<Route path='sign-up' element={<Authorisation/>} />
<Route path='sign-in' element={<Registrarion/>} />


</Route>

  </Routes>
)


}

export default App;
