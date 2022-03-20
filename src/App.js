import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './routes/home/home.component';

import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import {UserProvider} from './contexts/user.context';


const Shop = () => {
  return <div>
    <h1>costammasmdlkas</h1>
  </div>
}

const App = () => {
  return(
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='auth' element={<Authentication />} />
          </Route>
        </Routes>
      </UserProvider>    
    </BrowserRouter>
  )
}

export default App;
