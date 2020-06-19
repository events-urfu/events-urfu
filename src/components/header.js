import React from "react";
import App from "./auth-modal";

import '../styles/header-styles.css';

import logo from '../img/logo_1.png';
import search from '../img/search.svg';
import Search from "../search";
import Tabled from "./table-search";


function Header(){
    return (
        <header>
            <div className="wrapper">
                <div className="container-signin">
                    <ul>
                        <li className="logo"><a href="https://loozmax.github.io/event-urfu/"><img alt="#" className="pic-logo" src={logo}/></a></li>
                        <li ><img alt='#' className='pic-search' src={search}/>
                        <input onChange={Search} className="search" placeholder="Ищете какое-то мероприятие?"/>
                        </li>
                        <Tabled />
                        <App />
                    </ul>
                </div>
            </div>
        </header>
    )
}



export default Header;