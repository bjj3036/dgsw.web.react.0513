import React, {Component} from 'react';
import Counter from './counter'; //counter 폴더 안에 index.js를 우선적으로 불러옴
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Counter/>
            </div>
        );
    }
}

export default App;
