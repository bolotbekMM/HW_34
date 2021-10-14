import React from "react";
import image from "./crocs.jpg";
import "./crocs.css";



function Crocs() {
    return(
        <div className="crocs-div" >
            <img className="product1" src={image}/>
        </div>
    )
}

export default Crocs;