import React, {Component} from 'react'

class TodoItem extends Component {
    deleteItem=()=>{
        this.props.deleteItem(this.props.stringItem.id, this.props.stringIndex);
    }

    makeTodo=()=>{
        this.props.makeTodo(this.props.stringItem.id, this.props.stringItem.status, this.props.stringIndex);
    }

    render() {
        return (<div>
            <label style={{ textDecorationLine: this.props.stringItem.status ? 'line-through' : 'none' }} 
                onClick={this.makeTodo}>{this.props.stringItem.content}</label>
            <button onClick={this.deleteItem}>×</button>
        </div>)
    }
}

export default TodoItem;