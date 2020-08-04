import React, {Component} from 'react'
import { connect } from 'react-redux';
import { deleteItemAction } from '../../action/addItemAction'

class TodoItem extends Component {
    deleteItem = () => {
        this.props.deleteItem(this.props.stringIndex);
    }

    render() {
        return (<div>
            <label>{this.props.stringItem}</label>
            <button onClick={this.deleteItem}>×</button>
        </div>)
    }
}

const mapDispatchToProps = ({
    deleteItem: deleteItemAction
})

export default connect(null, mapDispatchToProps)(TodoItem);