import React from "react";
import Counters from "./components/counters";
import "./App.css";
import Crocs from "./images/crocsapp"


function components() {
    
    return (
        <div className="app">
            <div className="container">
                <div className="logo-div">
                    <h4 className="logo">WILDBERRIES</h4>
                </div>
                <Crocs/>
                <div className="brand-name__div">
                    <h2 className="brand-name">CROCS / Кроссовки</h2>
                    <p className="product-description">Как бы далеко вы ни зашли, вы не пожалеете.
                        Мягкие и комфортные кроссовки LiteRide Pacer
                        поддержат вас в любой час - на пробежке, на
                        прогулке с семьей в парке, в увлекательном
                        путешествии или стильном выходе в город.</p>
                    <h5>Состав - croslite 100%</h5>

                </div>
                <div>
                <Counters/>
                </div>
                
            </div>
        </div>

    )

};
export default components;