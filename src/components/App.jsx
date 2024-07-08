import List from './List';
import Rating from './Rating';
function App() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <h1>Hello React</h1>
            <Rating />
            <List />
        </div>
    );
}

export default App;
