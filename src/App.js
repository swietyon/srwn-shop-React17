import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './routes/home/home.component';

import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import { CartProvider } from './contexts/cart.context';
import {UserProvider} from './contexts/user.context';
import { ProductsProvider } from './contexts/products.context';
import Shop from './routes/shop/shop.component';

const App = () => {
  return(
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <Routes>
              <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='shop' element={<Shop />} />
                <Route path='auth' element={<Authentication />} />
              </Route>
            </Routes>
          </CartProvider>
        </ProductsProvider>
      </UserProvider>    
    </BrowserRouter>
  )
}

export default App;
