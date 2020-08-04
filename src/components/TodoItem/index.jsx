import React, {Component} from 'react'
import { connect } from 'react-redux';
import { deleteItemAction, makeTodoAction } from '../../action/addItemAction'

class TodoItem extends Component {
    deleteItem = () => {
        this.props.deleteItem(this.props.stringIndex);
    }

    makeTodo = () => {
        this.props.makeTodo(this.props.stringIndex);
    }

    render() {
        return (<div>
            <label style={{ textDecorationLine: this.props.stringItem.isdo ? 'line-through' : 'none' }} 
                onClick={this.makeTodo}>{this.props.stringItem.todoText}</label>
            <button onClick={this.deleteItem}>×</button>
        </div>)
    }
}

const mapDispatchToProps = ({
    deleteItem: deleteItemAction,
    makeTodo: makeTodoAction
})

export default connect(null, mapDispatchToProps)(TodoItem);