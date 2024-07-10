import { useState } from "react";

function Title() {
    const [text, setText] = useState("Начальная надпись");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
            <h1>{text}</h1>
            <label>
                Введите заголовок:
                <input value={text} onChange={handleChange} type='text' />
            </label>
        </>
    );
}

export default Title;
