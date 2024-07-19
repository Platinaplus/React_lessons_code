import { useEffect, useState } from 'react';

function MyFC({ title }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        //every time when component has been updated
        console.log('COUNT', {count})

        const timer = setInterval(()=>console.log('timer'), 2000)

        //every time before Effect or before component unmounting
        return () => {clearInterval(timer) }
    },[title])

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>MyFunctionComponent</h1>
            <h2>{title}</h2>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Change counter + 1
            </button>
        </div>
    )
}
export default MyFC;
