import React, { Component } from 'react'
import { addItemAction } from '../../action/addItemAction'
import { connect } from 'react-redux'

class TodoInput extends Component {
    addItem = () => {
        this.props.addItem(document.getElementById('inputString').value)
    }

    render() {
        return (<div>
            <input id="inputString"/>
            <button onClick={this.addItem}>add</button>
        </div>)
    }
}

const mapDispatchToProps = ({
    addItem: addItemAction
})

export default connect(null, mapDispatchToProps)(TodoInput);