import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../features/MainContent/Main';


function App(): JSX.Element {
return(
  <Routes>
<Route path='/' element={<Main/>}>

</Route>
  </Routes>
)


}

export default App;
