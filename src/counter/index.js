//rcc: 코드 스니핏, 인텔리J에서는 라이브 템플릿
import React, {Component} from 'react';
import Delta from './delta'
import NumInput from './numInput'
import './counter.scss';

//stateful component
class Counter extends Component {

    state = {
        num1: 0,
        num2: 0,
        result: 0,
    };

    //virtual DOM
    handlePlus = () => this.setState({result: this.state.num1 + this.state.num2})
    handleMinus = () => this.setState({result: this.state.num1 -  this.state.num2})
    handleMul = () => this.setState({result: this.state.num1 *  this.state.num2})
    handleDiv = () => this.setState({result: this.state.num1 /  this.state.num2})
    handleChange = e => this.setState({delta: Number.parseFloat(e.target.value)})
    handleNum1Change = e => this.setState({num1: Number.parseFloat(e.target.value)})
    handleNum2Change = e => this.setState({num2: Number.parseFloat(e.target.value)})

    render() {
        //속성으로 들어갈 때와 태그 안에서 this를 쓸 때 인터프리터가 this를 판단하기 애매하여서
        let {num1, num2, result,} = this.state;
        return (
            <div className='counter-style'>
                <NumInput num={num1} handleChange={this.handleNum1Change}/>
                <NumInput num={num2} handleChange={this.handleNum2Change}/>
                <div>Result: {result}</div>
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
                <button onClick={this.handleMul}>*</button>
                <button onClick={this.handleDiv}>/</button>
            </div>
        );
    }

}

export default Counter;