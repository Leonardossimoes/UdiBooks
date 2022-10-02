import React from 'react';
import logo from "../images/logo.png";
import purchaseLogo from "../images/purchase-logo.png";
import appImage from "../images/app-image.png";
import "../Components.css/footer.css";
import {AiFillInstagram, AiFillFacebook, AiFillTwitterSquare, AiFillYoutube } from "react-icons/ai";
import PaymentOptions from './PaymentOptions';

const Footer = () => {
  return (
    <div className='footer-container' >
        <div className="footer-upper">
        <div className="footer-logo-section">
             <img src={logo} width="100" height="100" />
            <p>Udibooks Comércio e Exportações LTDA<br/>CNPJ nº 40.612.686/0001-96<br/>Inscrição Estadual nº 456.885.971/8520<br/>com sede na Rua Iguaçu, nº 1778, bairro Umuarama,<br/>Uberlândia-MG, CEP 38405-138</p> 
        </div>

        <div className="footer-info-section">
            <div className="footer-contacts">
                <div className="footer-contacts-numbers">
                    <p className='footer-contacts-title'>COMPRE PELO TELEFONE</p>
                    <p className='footer-contacts-phone'>(34) 3236-4754</p>
                    <p className='footer-contacts-cost-info'>Ao custo de ligação local<br/>Das 9h Às 21h, 7 dias por semana</p>
                    <p className='footer-contacts-SAC'>SAC (34) 3252-6672</p>
                </div>

                <div className="footer-contacts-social-media">
                    <p className='footer-contacts-title'>CURTA NOSSAS REDES</p>
                    <AiFillFacebook className='footer-social-media-facebook'/>
                    <AiFillYoutube className='footer-social-media-youtube'/>
                    <AiFillTwitterSquare className='footer-social-media-twitter'/>
                    <AiFillInstagram className='footer-social-media-instagram'/>
                </div>
            </div>
        </div>   
        </div>

        <div className="footer-medium">
            <div className="safe-purchase">
                <p>Compra 100% segura</p>
                <img src={purchaseLogo} width="70" height="50" alt="" />
            </div>

            <div className="app-download">
                <p>Baixe nosso APP</p>
                <div className="app-images">
                    <img src={appImage} width="200" height="60" alt="" srcset="" />
                </div>
            </div>
        </div>

        <div className="footer-bottom">
               <PaymentOptions className="payment-options-icons"/>
        </div>
        

    </div>
  )
}

export default Footer;