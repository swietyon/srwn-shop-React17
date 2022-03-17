import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './routes/home/home.component';

import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

const Shop = () => {
  return <div>
    <h1>costammasmdlkas</h1>
  </div>
}

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='signIn' element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
