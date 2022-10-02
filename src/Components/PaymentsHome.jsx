import React from 'react';
import "../Components.css/paymentsHome.css";
import { MdOutlineLocalShipping, MdCreditCard, MdOutlineShoppingBag } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../firebase.config";
import { useStateValue } from '../context/stateProvider';
import { actionType } from '../context/reducer';

const PaymentsHome = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user}, dispatch] = useStateValue();

  const login = async () => {
    const {user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
    dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
    });
    localStorage.setItem('user', JSON.stringify(providerData[0]))
  }

  return (
    <div className='main-payment-container'>
        <div className='payment-div'>
          <MdOutlineShoppingBag className='payment-icon'/><p>Compre no site e retire na loja</p>
        </div>

        <div className='payment-div'>
          <MdCreditCard className='payment-icon'/><p>Parcele em até 12x sem juros</p>
        </div>

        <div className='payment-div'>
          <MdOutlineLocalShipping className='payment-icon'/><p>Frete grátis em compras acima de R$150,00</p>
        </div>
        {
          !user && (
            <div><button onClick={login} className='payment-button'>Faça seu login para entrar e ter a melhor experiência</button></div>
          )
        }

        
    </div>
  )
}

export default PaymentsHome;