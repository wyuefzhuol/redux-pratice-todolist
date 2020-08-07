import React, { Component } from 'react';
import { Input, Divider } from 'antd';

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    addItem = (value) => {
        const inputString = {
            content: value,
            status: false
        }
        this.props.addItem(inputString);
        this.setState({ value: '' });
    }

    updateInputValue = (event) => {
        this.setState({ value: event.target.value });
    }

    render() {
        return (<div>
            <Divider orientation="left">Add Todo</Divider>
            <Input.Search
                value={this.state.value}
                placeholder="what do you want to do"
                enterButton="add"
                size="large"
                onSearch={value => this.addItem(value)}
                onChange={this.updateInputValue}
            />
        </div>)
    }
}

export default TodoInput;