import React, {Component} from 'react'
import { connect } from 'react-redux';
import { deleteItemAction, makeTodoAction } from '../../action/addItemAction'
import Axios from 'axios';

class TodoItem extends Component {
    deleteItem = () => {
        const _this = this
        const deleteUrl = 'https://5e9ec500fb467500166c4658.mockapi.io/todos/'+this.props.stringItem.id
        Axios.delete(deleteUrl).then(function (response) {
            _this.props.deleteItem(_this.props.stringIndex)
            alert(response.data.content+'删除成功！')
        }).catch(function (error) {
            alert(error)
        })
    }

    makeTodo = () => {
        const _this = this
        const putUrl = 'https://5e9ec500fb467500166c4658.mockapi.io/todos/'+this.props.stringItem.id
        Axios.put(putUrl, { status: !this.props.stringItem.status }).then(function (response) {
            _this.props.makeTodo(_this.props.stringIndex);
            alert('状态改变！')
        }).catch(function (error) {
            alert(error)
        })
    }

    render() {
        return (<div>
            <label style={{ textDecorationLine: this.props.stringItem.status ? 'line-through' : 'none' }} 
                onClick={this.makeTodo}>{this.props.stringItem.content}</label>
            <button onClick={this.deleteItem}>×</button>
        </div>)
    }
}

const mapDispatchToProps = ({
    deleteItem: deleteItemAction,
    makeTodo: makeTodoAction
})

export default connect(null, mapDispatchToProps)(TodoItem);