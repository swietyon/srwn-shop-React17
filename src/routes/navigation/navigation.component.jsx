import { Fragment, useContext } from "react";
import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CardIcon from "../../components/card-icon/card-icon.component";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { selectCurrentUser } from '../../store/user/user.selector';
import { CartContext } from "../../contexts/cart.context";

import { NavigationContainer, NavLink, NavLinksContainer } from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);
    return (
      <Fragment>
            <NavigationContainer>
                <NavLink to='/'>
                    <CrwnLogo className="logo" />
                </NavLink>
                <NavLinksContainer>
                    <NavLink to='/shop'>SHOP</NavLink>

                    {
                      currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>{' '}SIGN OUT{' '}</NavLink>
                      ) : (
                        <NavLink to='/auth'>
                          SIGN IN
                        </NavLink>
                      )
                    }
                    <CardIcon />
                </NavLinksContainer>
                {
                  isCartOpen && <CartDropdown />
                }
            </NavigationContainer>
            <Outlet />
      </Fragment>
    )
  }

export default Navigation;