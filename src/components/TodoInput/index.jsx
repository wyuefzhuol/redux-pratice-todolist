import React, { Component } from 'react'

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputString: '',
        };
    }

    inputTodoContent = (event) => {
        this.setState({ inputString: event.target.value });
    }

    addItem = () => { 
        const inputString = {
            content: this.state.inputString,
            status: false
        }
        this.props.addItem(inputString);
        this.setState({ inputString: '' });
    }

    render() {
        return (<div>
            <label>请输入要添加的内容：</label>
            <input id="inputString" onChange={this.inputTodoContent}/>
            <button onClick={this.addItem}>add</button>
        </div>)
    }
}

export default TodoInput;