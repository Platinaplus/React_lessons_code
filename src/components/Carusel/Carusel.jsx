import s from './Carusel.module.css'
import { useState } from "react";

const images = [
    "https://i.pinimg.com/736x/f9/f2/95/f9f2951ce0bdcd54d0bf24e41aa2ea4f.jpg",
    "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg",
    "https://i.pinimg.com/736x/be/39/7c/be397c91b8026b17f5f8a6ed98e23e9e.jpg",
    "https://twam.ru/wp-content/uploads/2024/02/priroda-20.webp",
];

function Carusel() {
    const [imgIdx, setImgIdx] = useState(0);

    const handleClick = () => {
        setImgIdx((prevIdx) => (prevIdx + 1) % images.length);
    };

    return (
        <div className={s.container}>
            <img src={images[imgIdx]} style={{ width: "400px", height: "400px" }} alt='pic' />
            <button onClick={handleClick}>Change picture</button>
        </div>
    );
}
export default Carusel;
