import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends React.Component{

    // make the header sticky on scroll
    componentDidMount(){

        window.onscroll=()=>{
            stickNavbar();
        }

        let navbar=document.getElementById("nav-bar");

        let stickNavbar=()=>{

            // if horizontal scroll is greater than position of the navbar
            if(window.scrollY>60){
                navbar.classList.add("sticky");
                navbar.classList.add("top-padding");
            }else{
                navbar.classList.remove("sticky");
                navbar.classList.remove("top-padding");
            }
        }
    }

    render(){

        return(
            
            <nav id='nav-bar'>
                <ul>
                    <li>
                        <Link id='header-banner' to='/'>tic-tac-toe</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Header;