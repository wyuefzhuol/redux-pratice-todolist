import React, {Component} from 'react'

class TodoItem extends Component {
    render() {
        return (<div>
            <label>{this.props.stringItem}</label>
            <button>×</button>
        </div>)
    }
}

export default TodoItem;