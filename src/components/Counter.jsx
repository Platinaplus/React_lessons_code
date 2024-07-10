import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);

    const handleContainerClick = (e) => {
        if (e.target.dataset.action === "increment") {
            setCount((prevCount) => prevCount + 1);
        } else if (e.target.dataset.action === "decrement") {
            setCount((prevCount) => prevCount - 1);
        }
    };

    return (
        <div onClick={handleContainerClick}>
            <h1>
                Count: <span>{count}</span>
            </h1>
            <button data-action='increment'>+</button>
            <button data-action='decrement'>-</button>
        </div>
    );
}
export default Counter;
