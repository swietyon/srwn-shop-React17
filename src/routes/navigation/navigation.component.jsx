import { Fragment, useContext } from "react";
import React from "react";

import { Link, Outlet } from "react-router-dom";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CardIcon from "../../components/card-icon/card-icon.component";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from "../../utils/firebase/firebase.utils";


import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { NavigationContainer, LogoContainer, NavLink, NavLinksContainer } from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
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
                        <NavLinksContainer onClick={signOutUser}>{' '}SIGN OUT{' '}</NavLinksContainer>
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