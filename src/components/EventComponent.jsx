function EventComponent() {
    return (
        <>
            <h1 onClick={() => console.log("Click")}>Кликни</h1>
            <h1 onDoubleClick={() => console.log("DoubleClick")}>Дважды Кликни</h1>
            <h1 onMouseDown={() => console.log("MouseDown")} onMouseUp={() => console.log("MouseUp")}>
                Зажми кнопку мыши
            </h1>
            <h1 onMouseOver={() => console.log("MouseOver")}>Наведи курсор</h1>
            <h1 onMouseMove={() => console.log("MouseMove")}>Поводи курсором</h1>
        </>
    );
}
export default EventComponent;
