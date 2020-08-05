import React, { Component } from 'react'
import TodoItem from '../TodoItem'

class TodoList extends Component {
    render() {
        return (<div>
            <table border="1" width="100%">
                <thead>
                    <tr><th><label>Todo</label></th></tr>
                </thead>
                <tbody>
                    {this.props.stringList.map((item, index) =>
                        <tr key={index}><td key={index}><TodoItem deleteItem={this.props.deleteItem}
                            makeTodo={this.props.makeTodo}
                            stringItem={item} stringIndex={index} key={index} /></td></tr>)}
                </tbody>
            </table>
        </div>)
    }
}

export default TodoList;