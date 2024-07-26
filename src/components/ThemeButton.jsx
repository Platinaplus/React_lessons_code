import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';
function ThemeButton() {

    const theme = useContext(ThemeContext);

    return (
        <button className={theme === 'light' ? 'light' : 'dark'}>BUTTON</button>)
}

export default ThemeButton;
