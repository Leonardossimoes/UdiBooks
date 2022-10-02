import React from 'react';
import {paymentOptions} from "../data";
import "../Components.css/paymentoptions.css";

const PaymentOptions = () => {
  return (
    <div className='payment-options-container'>
        {
            paymentOptions && paymentOptions.map((n) => (
                <div className="flags">
                    <img src={n.image} width="45" height="25" alt="" srcset="" />
                </div>
            ))
        }
    </div>
  )
}

export default PaymentOptions;