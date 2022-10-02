import react from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import PLP from "./Pages/PLP";
import PDP from "./Pages/PDP";
import {booksRomance, booksEsportes, booksAdm, booksMed, booksKids, booksBio, booksFood, booksLaw, booksHelp, booksAli, booksKel, booksEmma, booksLari, booksKech, publisher, popularProducts, maxDiscounts, categorieDropdown} from "./data"
import CategoriePage from "./Pages/CategoriePage";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/*" element={<Home/>}/>
      <Route path="/romance" element={<PLP title="Romance" data={booksRomance}/>}/>
      <Route path="/esportes" element={<PLP title="Esportes" data={booksEsportes}/>}/> 
      <Route path="/adm" element={<PLP title="Administração" data={booksAdm}/>}/> 
      <Route path="/kids" element={<PLP title="Quadrinhos" data={booksKids}/>}/> 
      <Route path="/bio" element={<PLP title="Biografias" data={booksBio}/>}/> 
      <Route path="/food" element={<PLP title="Gastronomia" data={booksFood}/>}/> 
      <Route path="/law" element={<PLP title="Direito" data={booksLaw}/>}/>    
      <Route path="/help" element={<PLP title="Autoajuda" data={booksHelp}/>}/>
      <Route path="/med" element={<PLP title="Medicina" data={booksMed}/>}/>

      <Route path="/categorie" element={<CategoriePage data={categorieDropdown}/>}/>
      <Route path="/publisher" element={<CategoriePage data={publisher}/>}/>
      <Route path="/publisher" element={<CategoriePage title="Medicina" data={booksMed}/>}/>

      <Route path="/ali" element={<PLP title={publisher[0].publisher} data={booksAli}/>}/>
      <Route path="/kel" element={<PLP title={publisher[1].publisher} data={booksKel}/>}/>
      <Route path="/emma" element={<PLP title={publisher[2].publisher} data={booksEmma}/>}/>
      <Route path="/lari" element={<PLP title={publisher[3].publisher} data={booksLari}/>}/> 
      <Route path="/kech" element={<PLP title={publisher[4].publisher} data={booksKech}/>}/>

      {
        popularProducts && popularProducts.map((n) => (
          <Route path={"/popularProducts/"+n.id} element={<PDP title={popularProducts[n.id-1].title} rating={popularProducts[n.id-1].rating} price={popularProducts[n.id-1].price} break={popularProducts[n.id-1].break} data={popularProducts} image={popularProducts[n.id-1].img}/>}/>
        ))
      }
      {
        maxDiscounts && maxDiscounts.map((n) => (
          <Route path={"/maxDiscounts/"+n.id} element={<PDP title={maxDiscounts[n.id-1].title} rating={maxDiscounts[n.id-1].rating} price={maxDiscounts[n.id-1].price} break={maxDiscounts[n.id-1].break} data={maxDiscounts} image={maxDiscounts[n.id-1].img}/>}/>
        ))
      }      

      {
        booksAdm && booksAdm.map((n) => (
          <Route path={"/adm/"+n.id} element={<PDP title={booksAdm[n.id-1].title} rating={booksAdm[n.id-1].rating} price={booksAdm[n.id-1].price} break={booksAdm[n.id-1].break} data={booksAdm} image={booksAdm[n.id-1].img}/>}/>       
        ))
      }
      {
        booksHelp && booksHelp.map((n) => (
          <Route path={"help/"+n.id} element={<PDP title={booksHelp[n.id-1].title} rating={booksHelp[n.id-1].rating} price={booksHelp[n.id-1].price} break={booksHelp[n.id-1].break} data={booksHelp} image={booksHelp[n.id-1].img}/>}/>       
        ))
      }
      {
        booksLaw && booksLaw.map((n) => (
          <Route path={"law/"+n.id} element={<PDP title={booksLaw[n.id-1].title} rating={booksLaw[n.id-1].rating} price={booksLaw[n.id-1].price} break={booksLaw[n.id-1].break} data={booksLaw} image={booksLaw[n.id-1].img}/>}/>       
        ))
      }
      {
        booksFood && booksFood.map((n) => (
          <Route path={"food/"+n.id} element={<PDP title={booksFood[n.id-1].title} rating={booksFood[n.id-1].rating} price={booksFood[n.id-1].price} break={booksFood[n.id-1].break} data={booksFood} image={booksFood[n.id-1].img}/>}/>       
        ))
      }
            {
        booksBio && booksBio.map((n) => (
          <Route path={"bio/"+n.id} element={<PDP title={booksBio[n.id-1].title} rating={booksBio[n.id-1].rating} price={booksBio[n.id-1].price} break={booksBio[n.id-1].break} data={booksBio} image={booksBio[n.id-1].img}/>}/>       
        ))
      }
            {
        booksKids && booksKids.map((n) => (
          <Route path={"kids/"+n.id} element={<PDP title={booksKids[n.id-1].title} rating={booksKids[n.id-1].rating} price={booksKids[n.id-1].price} break={booksKids[n.id-1].break} data={booksKids} image={booksKids[n.id-1].img}/>}/>       
        ))
      }
            {
        booksEsportes && booksEsportes.map((n) => (
          <Route path={"sports/"+n.id} element={<PDP title={booksEsportes[n.id-1].title} rating={booksEsportes[n.id-1].rating} price={booksEsportes[n.id-1].price} break={booksEsportes[n.id-1].break} data={booksEsportes} image={booksEsportes[n.id-1].img}/>}/>       
        ))
      }
      {
        booksMed && booksMed.map((n) => (
          <Route path={"med/"+n.id} element={<PDP title={booksMed[n.id-1].title} rating={booksMed[n.id-1].rating} price={booksMed[n.id-1].price} break={booksMed[n.id-1].break} data={booksMed} image={booksMed[n.id-1].img}/>}/>       
        ))
      }

      
      {
        booksAli && booksAli.map((n) => (
          <Route path={"ali/"+n.id} element={<PDP title={booksAli[n.id-1].title} rating={booksAli[n.id-1].rating} price={booksAli[n.id-1].price} break={booksAli[n.id-1].break} data={booksAli} image={booksAli[n.id-1].img}/>}/>       
        ))
      }
      {
        booksKel && booksKel.map((n) => (
          <Route path={"kel/"+n.id} element={<PDP title={booksKel[n.id-1].title} rating={booksKel[n.id-1].rating} price={booksKel[n.id-1].price} break={booksKel[n.id-1].break} data={booksKel} image={booksKel[n.id-1].img}/>}/>       
        ))
      }
      {
        booksEmma && booksEmma.map((n) => (
          <Route path={"emma/"+n.id} element={<PDP title={booksEmma[n.id-1].title} rating={booksEmma[n.id-1].rating} price={booksEmma[n.id-1].price} break={booksEmma[n.id-1].break} data={booksEmma} image={booksEmma[n.id-1].img}/>}/>       
        ))
      }
      {
        booksLari && booksLari.map((n) => (
          <Route path={"lari/"+n.id} element={<PDP title={booksLari[n.id-1].title} rating={booksLari[n.id-1].rating} price={booksLari[n.id-1].price} break={booksLari[n.id-1].break} data={booksLari} image={booksLari[n.id-1].img}/>}/>       
        ))
      }
                
    </Routes>
      

    </div>
  );
}

export default App;
