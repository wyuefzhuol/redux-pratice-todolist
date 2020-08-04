import React, {Component} from 'react'
import TodoItem from '../TodoItem'
import { connect } from 'react-redux'

class TodoList extends Component {
    render() {

        return (<div>
            { this.props.stringList.map((item, index) => <TodoItem stringItem={item} key={index}/>) }
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        stringList: state.stringReducer.stringList
    }
}

export default connect(mapStateToProps, null)(TodoList);