import React from 'react';
import "./home.css";
import MainSlider from '../Components/MainSlider';
import Navbar from "../Components/Navbar";
import PaymentsHome from '../Components/PaymentsHome';
import ShortBanner from '../Components/ShortBanner';
import Showcase from '../Components/Showcase';
import {shortBanners,popularProductsHeader, popularProducts, maxDiscountsHeader, maxDiscounts} from "../data";
import CreditCardSection from '../Components/CreditCardSection';
import Footer from '../Components/Footer';


const Home = () => {
  return (
    <div className='main-home'>
        <Navbar/>
        <MainSlider/>
        <PaymentsHome/>
        <ShortBanner banner={shortBanners[0].img}/>
        <Showcase items={popularProducts} title={popularProductsHeader[0].title} subtitle={popularProductsHeader[0].subTitle}/>
        <ShortBanner banner={shortBanners[1].img}/>
        <Showcase items={maxDiscounts} title={maxDiscountsHeader[0].title} subtitle={maxDiscountsHeader[0].subTitle}/>
        <CreditCardSection/>
        <Footer/>
    </div>
  )
}

export default Home