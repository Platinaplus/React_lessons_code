import ColorChangeComponent from './ColorChangeComponent';
import MyClassComponent from "./MyClassComponent";
import MyFC from './MyFC';
import s from './App.module.css'
import { useState } from "react";

function App() {
    const [show, setShow] = useState(true);
    const [title, setTitle] = useState('Props title')
    const [text, setText] = useState('')
    return (
        <div className={s.container}>
            {show && <MyClassComponent title='Click me' />}
            {show && <MyFC title={title} />}

            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Input title' />
            <button onClick={() => setTitle(text)}>Change title</button>

            {/* <ColorChangeComponent /> */}

            <button
                style={{ marginTop: "50px" }} onClick={() => setShow(!show)}>
                REMOVE Component
            </button>

        </div>
    );
}

export default App;
