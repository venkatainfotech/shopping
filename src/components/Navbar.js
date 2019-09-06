import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import styled from 'styled-components';
// import { transform } from '@babel/core';


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-color navbar-dark">
               <Link to='/'>
                   <img src="https://cdn1.iconfinder.com/data/icons/main-ui-elements-with-colour-bg/512/eye-512.png" alt="logo" className="navbar-brand "/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' className="nav-link">
                            Product
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <button className="mycart-btn">
                         <span className="mr-2">
                             <i class="fa fa-cart-plus"></i>
                         </span>
                         My Cart
                    </button>
                </Link>
            </nav>
        );
    }
}



export default Navbar;
