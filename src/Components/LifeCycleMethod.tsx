import { Component } from 'react';
export interface IProps {
    initialValue: number;
};
export interface IState {
    count: number;
}
class LifeCycleMethod extends Component<IProps, IState> {
    state: IState = {
        count: this.props.initialValue
    };
    increment = (): void => {
        const { count } = this.state;
        this.setState({ count: count + 1 });
    };
    componentDidMount() {
        console.log("componentDidMount", this.props, this.state)
    };
    componentDidUpdate(prevProps: IProps, prevState: IState) {
        console.log("componentDidUpdate", prevProps, prevState)
    };

    shouldComponentUpdate(prevProps: IProps, prevState: IState) {
        console.log("shouldComponentUpdate", prevProps, prevState)
        return true;
    };

    componentWillUnmount() {
        console.log("componentWillUnmount", this.props, this.state);
    }

    render() {
        console.log("render", this.props, this.state);
        const { count } = this.state;
        return (
            <div>
                <div className="text-center">
                    <h3>initialValue: {count} </h3>
                    <button onClick={this.increment}> Increment Value </button>
                </div>
            </div>
        );
    }
}

export default LifeCycleMethod;