//this is an example of lifecycle methods

import React from "react";
class MyClassComponent extends React.Component {
    constructor(props) {
        console.log("constructor INITIALIZED");
        super(props);
        this.state = { count: 0 };
    }

    componentDidMount() {
        console.log("componentDidMount MOUNTED");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate UPDATED");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount UNMOUNTED");
    }

    render() {
        console.log("render RENDERED");
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1>MyClassComponent</h1>
                <h2>{this.state.count}</h2>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>{this.props.title}</button>
            </div>
        );
    }
}

export default MyClassComponent;
