import Component from './components/Component';
import Counter from './components/Counter';
import DataProvider from './components/DataProvider';
import DecrementBtn from './components/DecrementBtn';
import IncrementBtn from './components/IncrementBtn';
import MyProvider from './components/MyProvider';
import ThemeContext from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import { useState } from 'react';
import PropsComponent from './components/PropsComponent';
function App() {

    const [theme, setTheme] = useState('dark')
    const [title, setTitle] = useState('Default title')
    const [color, setColor] = useState('lightblue')
    
    return (
        <div className='container'>
            <h1>Hello React</h1>
            <input onChange={(e)=>setTitle(e.target.value)} type="text" value={title} />
            <select value={color} onChange={(e)=>setColor(e.target.value)} name="" id="">
                <option default value="lightblue">lightblue</option>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="yellow">yellow</option>
            </select>

            <PropsComponent title={title}/>

            <ThemeContext.Provider value={{theme, setTheme}}>
                <ThemeSwitcher />
            </ThemeContext.Provider>
            
            <MyProvider>
                <Counter />
                <IncrementBtn />
                <DecrementBtn />
            </MyProvider>

            <DataProvider>
                <Component/>
            </DataProvider>
        </div>
    );
}

export default App;
