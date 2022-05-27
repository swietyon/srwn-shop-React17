import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingIcon, CartIconContainer, ItemCount } from './card-icon.styles';

import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';



export const CardIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => {
      dispatch(setIsCartOpen(!isCartOpen));
  }

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon/>
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CardIcon;
