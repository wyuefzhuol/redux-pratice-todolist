import React, { Component } from 'react'
import { addItemAction } from '../../action/addItemAction'
import { connect } from 'react-redux'

class TodoInput extends Component {
    addItem = () => {
        let inputString = {
            content: document.getElementById('inputString').value,
            status: false
        }
        if (document.getElementById('inputString').value !== '') {
            this.props.addItem(inputString);
            document.getElementById('inputString').value = '';
        } else {
            alert('请输入后再点击添加！');
        }
    }

    render() {
        return (<div>
            <label>请输入要添加的内容：</label>
            <input id="inputString"/>
            <button onClick={this.addItem}>add</button>
        </div>)
    }
}

const mapDispatchToProps = ({
    addItem: addItemAction
})

export default connect(null, mapDispatchToProps)(TodoInput);