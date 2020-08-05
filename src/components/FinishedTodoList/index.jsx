import React, {Component} from 'react'
import TodoItem from '../TodoItem'

class FinishedTodoList extends Component {
    render() {
        return (<div>
            <table border="1" width="100%">
                <thead>
                    <tr><th><label>Todo</label></th></tr>
                </thead>
                <tbody>
                    { this.props.stringList.filter((item, index) => item.status === true).map((item, index) => 
                    <tr key={index}><td key={index}><TodoItem stringItem={item} stringIndex={index} key={index}/></td></tr>) }
                </tbody>
            </table>
        </div>)
    }
}

export default FinishedTodoList;