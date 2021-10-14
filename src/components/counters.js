import React, {useState} from "react";
import "./counters.css";


function Counters() {
    const [counter, setCounter] = useState(0)

    function increment(){
        setCounter(counter + 1)
    };

    function decrement() {
        setCounter(counter - 1)
    };

    return(
        <div className="btn-main__div" >
                    <button onClick={increment} className="btn-main">Добавить в корзину</button>
                    <div className="counter">
                        <p className="count-number">{counter}</p>
                    </div>
                    <button onClick={decrement} className="btn-delete">    убрать с корзины  </button>
                </div>
    )
}

export default Counters;