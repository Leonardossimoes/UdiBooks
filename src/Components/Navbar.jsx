import React, {useState} from 'react';
import "../Components.css/navbar.css";
import { FaSearch, FaShoppingCart, FaHeadphones } from "react-icons/fa";
import { GrFormNext } from "react-icons/gr";
import { AiFillPhone } from "react-icons/ai";
import { MdSell, MdArrowDropDown, MdLogout } from "react-icons/md";
import navLogo from "../images/logo.png";
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../firebase.config";
import { useStateValue } from '../context/stateProvider';
import { actionType } from '../context/reducer';
import Dropdown from './CategorieDropdown';
import PublisherDropdown from './PublisherDropdown';
import {categorieDropdown as BooksCategoriesNavBar} from '../data';


const Navbar = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [isMenu, setIsMenu] = useState(false); 
    const [dropDown, setDropDown] = useState(false);
    const [catDrop, setCatDrop] = useState(false);
    const [pubDrop, setPubDrop] = useState(false)

    const toggle = () => {
        setIsMenu(!isMenu);
    }

    const menuDropDown = () => {
        setDropDown(!dropDown);
    }

    const [{user}, dispatch] = useStateValue();
    
    const login = async () => {
        const {user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
        dispatch({
            type: actionType.SET_USER,
            user: providerData[0],
        });
        localStorage.setItem('user', JSON.stringify(providerData[0]))
    }

    if(user){
        var userName = user.displayName
        var splittedName = userName.split(' ');
    }

    const logout = () => {
        setIsMenu(false);
        localStorage.clear();
        dispatch({
            type: actionType.SET_USER,
            user: null,
          });
        document.location.reload();
    }

    const categorieDropdown = () => {
        setCatDrop(!catDrop);
    }

    const publisherDropdown = () => {
        setPubDrop(!pubDrop);
    }

  return (
    <div className='nav-main-container'>
        <div className="header-navigation">
          <div onClick={categorieDropdown}><p>Compre por categoria</p></div>
          <div onClick={publisherDropdown}><p>Compre por autor</p></div> 
          <div><p><AiFillPhone/> (34) 3236-4754</p></div> 
          <div><p><FaHeadphones/> Atendimento online</p></div>
          <div><p><MdSell/> Venha vender conosco</p></div>
        </div>
        {
            catDrop && (
                <Dropdown className='main-dropdown-container'/>
            )
        }
        {
            pubDrop && (
                <PublisherDropdown className='main-dropdown-container'/>
            )
        }         

        <div className="nav-principal">

            <div className="nav-principal-left">

            { /* Ajustes para mobile */ }
                    
            <div className="menu-toggle" onClick={toggle}>
                <div className='toggle-div'></div>
                <div className='toggle-div'></div>
                <div className='toggle-div'></div>
            </div>

             {
                isMenu && (
                    <motion.div 
                    initial={{opacity: 0, x : -200}}
                    animate={{opacity: 1, x : 0}}
                    exit={{opacity: 1, x : -200}}
                    className="menu-toggle-container">
                        {
                            !user && (
                                <ul>
                                    <li className='menu-toggle-login'><a onClick={login} href="#">Entrar na Minha Conta</a></li>
                                    <li><a href="#">Meus Pedidos</a></li>
                                    <li><a href="#">Endereços</a></li>
                                </ul>
                            )
                        }
                        {
                            user && (
                                <ul className='menu-toggle-sections'>
                                    <div className="menu-toggle-welcome-section">
                                        <p>Bem vindo</p>
                                        <img className='user-profile-image' src={user.photoURL} width="35" height="35" alt="" />
                                        <p className='user-profile-welcome'>Olá, {splittedName[0]}</p>
                                    </div>
                                    <li><a href="http://localhost:3000/categorie">Compre por Categorias</a></li>
                                    <li><a href="http://localhost:3000/publisher">Compre por Autores</a></li>
                                    <li className='menu-toggle-login'><a onClick={logout} href="#">Sair da Minha Conta</a></li>
                                </ul>                                
                            )
                        }

                    </motion.div>
                )
             }

                <div className="nav-logo">
                    <a href="http://localhost:3000/"><img src={navLogo} width="50" height="50" alt="logo" /></a>
                    
                </div>

                <div className="nav-search-box">
                    <input type="text" className='nav-search-input' placeholder="O que você está procurando ?"/><FaSearch className='search-box-icon'/>
                </div>
            </div>
            
            <div className="nav-principal-right">

                <div className="nav-cart">
                    <FaShoppingCart className='nav-cart-icon'/>
                    <div className="nav-cart-number">0</div>
                </div>

                <div className="nav-login">
                    {
                        user && (
                            <div className="user-profile">
                                <img className='user-profile-image' src={user.photoURL} width="35" height="35" alt="" />
                               <div className="user-profile-bottom">
                                    <p className='user-profile-welcome'>Olá, {splittedName[0]}</p>
                                    <MdArrowDropDown onClick={menuDropDown}/>
                                    {
                                        dropDown && (
                                            <div className="profile-menu-dropdown" onClick={logout}>
                                                <li className='profile-menu-logout'><MdLogout/>Logout</li>
                                            </div>
                                        )
                                    }
                               </div> 
                            </div>
                        )
                    }
                    {
                        !user && (
                            <div className="nav-login-items">
                                <p className='nav-login-text' onClick={login}>LOGIN</p>
                                <p className='nav-login-text'>REGISTER</p>
                            </div>
                        )
                    }

                </div>

            </div>
        </div>
        
        <div className='bottom-nav-section'>
            <ul>
                <li className='bottom-nav-section-item'>Veja também <GrFormNext/></li>
                <a className='bottom-nav-section-item' href={BooksCategoriesNavBar[5].endpoint}><li className='bottom-nav-section-item'>Romance</li></a>
                <a className='bottom-nav-section-item' href={BooksCategoriesNavBar[6].endpoint}><li className='bottom-nav-section-item'>Bibliografias</li></a>
                <a className='bottom-nav-section-item' href={BooksCategoriesNavBar[7].endpoint}><li className='bottom-nav-section-item'>Esportes</li></a>
                <a className='bottom-nav-section-item' href={BooksCategoriesNavBar[8].endpoint}><li className='bottom-nav-section-item'>Gastronomia</li></a>
            </ul>
        </div>
    </div>
    
  )
}

export default Navbar;