import * as React from "react";
import {HelloWorld} from "../hello-world/HelloWorld";
import {connect} from "react-redux";
import {Component} from "react";
import {helloSetupAction} from "../../store/helloworld/actions";

export interface HelloWorldProps {
    hello: string,
    helloAction(val: string): void
}

class HelloWorldContainer extends Component<HelloWorldProps>{
    render(){
        return <HelloWorld
            hello={this.props.hello}
            helloAction={(val: string) => this.props.helloAction(val)}
        />
    }
}

const mapStateToProps = (store: any) => {
    return {
        hello: store.hello.hello
    };
};

const mapDispatchToProps = {
    helloAction: helloSetupAction
};

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorldContainer)