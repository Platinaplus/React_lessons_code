import MyContext from '../context/MyContext';
import { useState } from 'react';

function MyProvider({children}){
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count+ 1)
    }
    function decrement() {
        setCount(count- 1)
    }

    return(
        <MyContext.Provider value={{count, increment, decrement}}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider;
