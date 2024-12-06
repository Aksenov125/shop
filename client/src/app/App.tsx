import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../features/MainContent/Main';
import MainPage from '../features/Main/components/MainPage';


function App(): JSX.Element {
return(
  <Routes>
<Route path='/' element={<Main/>}/>
<Route path='/main' element={<MainPage/>}/>
  </Routes>
)


}

export default App;
