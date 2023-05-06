import React, {useState} from 'react'
import './navbar.css'
import { CgMenuGridR } from "react-icons/cg"
import { SiYourtraveldottv } from "react-icons/si"
import { GrClose } from "react-icons/gr"

const Navbar = () => {

    const [active, setActive] = useState('navBar')

    const showNav = () => {
        setActive('navBar activeNavbar')
    }

    const removeNav = () => {
        setActive('navBar')
    }
            
     
    return (
       <section className='navbarSection'>
        <header className='header flex'>

            <div className='logoDiv'>
                <a href='#' className='logo flex'>
                    <h1><SiYourtraveldottv className="icon"/> Travel.</h1>
                </a>
            </div>

            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="#" className="navLink">Home</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Packages</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">About</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Blogs</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Contact</a>
                    </li>

                    <button className='btn'>
                        <a href="#">BOOK NOW</a>
                    </button>
                </ul>

                <div onClick={removeNav} className="closeNavbar">
                    <GrClose className="icon"/>
                </div>
            </div>

            <div onClick={showNav} className="toggleNavbar">
            <CgMenuGridR className="icon"/>
            </div>
            
        </header>  
       </section>
    )
}


export default Navbar