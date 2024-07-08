import { useState } from "react";
function Rating() {
    const ratingImg = ["icons/picture.png", "icons/smile.png", "icons/smile_1.png", "icons/smile_2.png", "icons/sad.png"];
    const [rating, setRating] = useState(ratingImg[0]);

    return (
        <>
            <img src={rating} alt='rating' />
            <button onClick={() => setRating(ratingImg[4])}>Bad</button>
            <button onClick={() => setRating(ratingImg[1])}>Not bad</button>
            <button onClick={() => setRating(ratingImg[2])}>Good</button>
            <button onClick={() => setRating(ratingImg[3])}>Exelent</button>
        </>
    );
}

export default Rating;
