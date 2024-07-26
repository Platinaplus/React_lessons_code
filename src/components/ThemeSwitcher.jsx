import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

function ThemeSwitcher({testValue}){
    const { theme, setTheme } = useContext(ThemeContext)

    function toggleTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <div style={theme === 'dark' ? {background: 'DarkGrey', padding: "50px"} : {background: 'Aqua', padding: "50px"}}>
            <p>Current Theme: {theme} </p>
            <button onClick={toggleTheme}>Change theme</button>
        </div>
    )
}

export default ThemeSwitcher;
