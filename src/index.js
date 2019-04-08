import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './App';
import * as serviceWorker from './serviceWorker';
import Button from './Button' 

class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
            <Clock/>
            <Button/>
            </div>
        )
    }
}

/*function Greet(props) {// прописываем функцию ,чтобы что-то вывелолось на странице ,название функции пишем с большой буквы
  // let phrase = "World!";//прописываем переменную с значением строки  World!
    return(
    <h1>Hello {props.phrase}! My name is {props.name}</h1>// в {} скобки можно записывать выражение, переменные ,функции и т.д
)
}
function GreeatAll() {
    return (
        <div>
            <Greet phrase="World!" name="Ival"/>
            <Greet phrase="World!" name="Anna"/>
            <Greet phrase="World!" name="Alex"/>
        </div>
    )
}  закомментировал 17:00*/
ReactDOM.render(<App/> , document.getElementById('root'));
serviceWorker.unregister();
