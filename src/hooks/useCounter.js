import { useState } from "react";

const useCounter = (initialState) => {

    const [counter, setCounter] = useState(initialState);

    const handleDecrement = () => {
        if (counter <= 1) return;
        setCounter(counter - 1);
    };

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    return { counter, handleDecrement, handleIncrement };
}

export default useCounter