import MyClassComponent from "./MyClassComponent";
import { useState } from "react";

function App() {
    const [show, setShow] = useState(true);
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <h1>Hello React</h1>
            {show && <MyClassComponent title='Click me' />}
            <button onClick={() => setShow(!show)}>REMOVE MyClassComponent</button>
        </div>
    );
}

export default App;
