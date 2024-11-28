import React, {useState, useEffect} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const increase = () => setCounter((prev) => prev+1);
    const decrease = () => setCounter((prev) => prev-1);

    return(
        <div className="counter">
            <span>{counter}</span>;
            <button onClick={increase}>+</button>;
            <button onClick={decrease}>-</button>;
        </div>

    );
};

export default Counter;