import React, { Component } from 'react';
import { Input, Divider } from 'antd';

class TodoInput extends Component {
    addItem = (value) => {
        const inputString = {
            content: value,
            status: false
        }
        this.props.addItem(inputString);
        this.setState({ inputString: '' });
    }

    render() {
        return (<div>
            <Divider orientation="left">Add Todo</Divider>
            <Input.Search
                placeholder="what do you want to do"
                enterButton="add"
                size="large"
                onSearch={value => this.addItem(value)}
            />
        </div>)
    }
}

export default TodoInput;