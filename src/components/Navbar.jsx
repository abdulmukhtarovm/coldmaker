import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { getLanguage, getText } from '../locales/index'
import { LANGUAGE } from '../tools/constants';

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)
    const [burger, setBurger] = useState(false)

    const changeNavbar = () => {

        if (window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar);

    const changeLanguage = (e) => {
        localStorage.setItem(LANGUAGE, e.target.value)
        document.location.reload(true)
    }

    return (
        <>
            <div className={`navBar ${navbar ? 'active' : ''}`}>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-2 col-4">
                            <div className="logo">
                                <a href="/"><img className='w-100' src="img/logo.png" alt="" /></a>
                            </div>
                        </div>
                        <div className={`col-9 mobileWrap ${burger ? '' : 'burgered'}`}>
                            <ul className="nav-menu">
                                <li>
                                    <a onClick={() => setBurger(!burger)} href="/">{getText("home")}</a>
                                </li>
                                <li>
                                    <a onClick={() => setBurger(!burger)} href="#services">{getText("services")}</a>
                                </li>
                                <li>
                                    <a onClick={() => setBurger(!burger)} href="#about">{getText("about")}</a>
                                </li>
                                <li>
                                    <a onClick={() => setBurger(!burger)} href="#team">{getText("team")}</a>
                                </li>
                                <li>
                                    <a onClick={() => setBurger(!burger)} href="#contacts">{getText("contacts")}</a>
                                </li>
                                <li className='d-flex flex-column'>
                                    <a href="tel:+998901258850">+998 90 125 88 50 </a>
                                    <a href="tel:+998930028858">+998 93 002 88 58 </a>
                                </li>
                                <li>
                                    <select className='siteLang' onChange={changeLanguage}>
                                        <option value="ru" selected={getLanguage() === "ru"} >Ру</option>
                                        <option value="uz" selected={getLanguage() === "uz"} >Uz</option>
                                    </select>
                                </li>
                            </ul>
                        </div>

                        <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                            <div className="burger1"></div>
                            <div className="burger2"></div>
                            <div className="burger3"></div>
                        </div>

                    </div>
                </div>
            </div >
            <div className="navbarLine"></div>

            <div className="phoneWrap">
                <div className="phone">
                    <a href="tel:+998901258850">
                      <FontAwesomeIcon icon={faPhone}/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar