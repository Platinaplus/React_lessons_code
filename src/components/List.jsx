import { useState } from "react";

function List() {
    const people = [
        { name: "John", age: 25 },
        { name: "Jane", age: 30 },
        { name: "Bob", age: 35 },
        { name: "Alice", age: 40 },
    ];

    const [list, setList] = useState(people);
    return (
        <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {list.map((person, index) => (
                <li key={index}>
                    {person.name} - {person.age}
                    <button
                        onClick={() => {
                            const newList = [...list];
                            newList.splice(index, 1);
                            setList(newList);
                        }}
                        style={{ marginLeft: "10px" }}
                    >
                        X
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default List;
