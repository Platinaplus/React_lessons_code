function FormComponent() {
    let inputName = "";

    const handleInputChange = (event) => {
        inputName = event.target.value;
        console.log("Value:", inputName);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Name send:", inputName);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input onChange={handleInputChange} type='text' />
            </label>
            <button type='submit'>SUBMIT</button>
        </form>
    );
}

export default FormComponent;
