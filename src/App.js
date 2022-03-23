import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './routes/home/home.component';

import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import { CartProvider } from './contexts/cart.context';
import {UserProvider} from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import Checkout from './routes/checkout/checkout.component';
import Shop from './routes/shop/shop.component';

const App = () => {
  return(
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <Routes>
              <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='shop/*' element={<Shop />} />
                <Route path='auth' element={<Authentication />} />
                <Route path='checkout' element={<Checkout />} />
              </Route>
            </Routes>
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>    
    </BrowserRouter>
  )
}

export default App;
