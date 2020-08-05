import React, {Component} from 'react'
import { Button, List } from 'antd';

class TodoItem extends Component {
    deleteItem=()=>{
        this.props.deleteItem(this.props.stringItem.id, this.props.stringIndex);
    }

    makeTodo=()=>{
        this.props.makeTodo(this.props.stringItem.id, this.props.stringItem.status, this.props.stringIndex);
    }

    render() {
        return (<List.Item actions={[<Button onClick={this.deleteItem}>delete</Button>]}>
            <label style={{ textDecorationLine: this.props.stringItem.status ? 'line-through' : 'none' }} 
                onClick={this.makeTodo}>{this.props.stringItem.content}</label>
        </List.Item>)
    }
}

export default TodoItem;