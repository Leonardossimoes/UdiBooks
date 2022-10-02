import React from 'react';
import "../Components.css/creditcardsection.css";
import creditCard from "../images/credit-card.png"
import { MdAttachMoney } from "react-icons/md";

const CreditCardSection = () => {

  var cpf = document.getElementById('credit-cpf')

  let cpfMask = () => {

    if(cpf.value.length === 3 || cpf.value.length === 7) {
      cpf.value += "."
    }else if(cpf.value.length === 11){
      cpf.value += "-"
    }
  }

  const submit = () => {
    window.alert('CPF ainda não cadastrado!');
    cpf.value="";
    

  }



  return (
    <div className='credit-section'>
        <div className="credit-section-title">
            <p className='title-mini'>Conheça o</p>
            <p className='title-top'>CARTÃO UDIBOOKS</p>
        </div>

        <div className="credit-section-container">
            <div className="credit-card-info">
              <MdAttachMoney className='credit-card-info-icon'/>
              <p className='credit-card-info-title'>ANUIDADADE GRÁTIS POR GASTOS</p>
              <p className='credit-card-info-text'>Tenha redução progressiva na parcela da anuidade, conforme gastos por fatura</p>
              <a href="#">Saiba mais</a>
            </div>

            <div className="credit-section-card">
              <img className='credit-section-card-image' src={creditCard} width="220" height="200" alt="" srcset="" />
            </div>

            <div className="credit-section-offers">
              <p className="credit-section-offers-title">Digite seu CPF e veja quais ofertas estão disponíveis para você</p>
              <input className='credit-section-offers-input' id="credit-cpf" type="text" placeholder='Ex: 999.999.999-99' onKeyPress={(e) => cpfMask(e)} maxLength="14"/>
              <button onClick={submit} className='credit-section-offers-button'>VERIFICAR</button>
            </div>
        </div>
    </div>
  )
}

export default CreditCardSection;