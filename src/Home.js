import React from 'react'
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyGqPQSI4z50dOcqL4vvM51vMA18Je6V3UGA&usqp=CAU" alt=""/>
            <div className="home__row">
                <Product 
                id="1"
                title="Collier Couple Gravé avec Pierres de Naissance en Or 10 cts"
                price={74}
                rating={5}
                image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWY46oGXmHs7pTJpMh_RjUDHeAGYmdDpRG4aplRr0gxt0fx1eOFg55HMvbdL4UluL1DphHe2e&usqp=CAc"
                />
                <Product 
                id="2"
                title="Collier Clothilde Or Blanc Topaze Et Oxyde De Zirconium"
                price={169}
                rating={4}
                image ="https://www.histoiredor.com/dw/image/v2/BCQS_PRD/on/demandware.static/-/Sites-THOM_CATALOG/default/dwf83732fd/images/B3CFBTB505-master.jpg?sw=1024&sh=1024"
                />
            </div>
            <div className="home__row">
                <Product 
                id="3"
                title="Collier Swarovski Infinity Heart
                blanc, finition mix de métal"
                price={99}
                rating={5}
                image ="https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_600/5518865_png/collier-swarovski-infinity-heart--blanc--finition-mix-de-m%C3%A9tal-swarovski-5518865.png"
                />
                <Product 
                id="4"
                title="Jeulia Collier Noeud d'Amour en Argent Sterling"
                price={69}
                rating={5}
                image ="https://www.jeulia.fr/media/catalog/product/cache/f385957ba32f31cd063968db9aa39da1/5/d/5dbcfe64e78aajpg_1.jpg"
                />
                <Product 
                id="5"
                title="Bague MATY Or 375 rose nacres perles topazes"
                price={295}
                rating={5}
                image ="https://photos.maty.com/0119571/V1/1200/bague-maty-or-375-rose-nacres-perles-topazes.jpeg"
                />
            </div>
            <div className ="home__row">
                <Product 
                id="6"
                title="Collier cercles entrelacés en Or Vermeil avec zircon cubique"
                price={94}
                rating={4}
                image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0bjRM683Qo7-rdws79LtH4iP4PUB1lSoJ50AD7emeIXqooO0uf_ThH1k211C_Etzu3h6hHqm&usqp=CAc"
                />
            </div>
            
        </div>
        
    )
}

export default Home
