import React, { Component } from 'react'
import TodoItem from '../TodoItem'
import { List, Divider } from 'antd';

class FinishedTodoList extends Component {
    render() {
        return (<div>
            <Divider orientation="left">Finished Todo List</Divider>
            <List
                bordered
                dataSource={this.props.stringList}
                renderItem={(item, index) => (
                    <TodoItem  deleteItem={this.props.deleteItem}
                        makeTodo={this.props.makeTodo}
                        stringItem={item} stringIndex={index} key={index} />
                )}
            />
        </div>)
    }
}

export default FinishedTodoList;