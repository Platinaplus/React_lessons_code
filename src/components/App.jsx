import Carusel from './Carusel/Carusel';
import Counter from './Counter';
import EventComponent from './EventComponent';
import FormComponent from './FormComponent';
import Title from './Title';

function App() {

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <h1>Hello React</h1>
            {/* <EventComponent /> */}
            {/* <FormComponent /> */}
            {/* <Carusel /> */}
            {/* <Title /> */}
            <Counter />
        </div>
    );
}

export default App;
