import * as React from "react";
import {Component} from 'react';
import {HelloWorldProps} from "../hello-world-container/HelloWorldContainer";

export class HelloWorld extends Component<HelloWorldProps>{
    onHelloChanged = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.props.helloAction(e.target.value);
    };

    render() {
        return (
            <div className="hello-form">
                <h1>Hello, {this.props.hello}</h1>
                <input type="text"
                       className="input-hello"
                       placeholder="Papa"
                       value={this.props.hello}
                       onChange={this.onHelloChanged}
                />
            </div>
        );
    }
}

