import React, { Component } from 'react'
import { addItemAction } from '../../action/addItemAction'
import { connect } from 'react-redux'
import Axios from 'axios'

class TodoInput extends Component {
    addItem = () => {
        const inputString = {
            content: document.getElementById('inputString').value,
            status: false
        }
        const _this = this
        if (document.getElementById('inputString').value !== '') {
            Axios.post('https://5e9ec500fb467500166c4658.mockapi.io/todos', inputString)
                .then(function (response) {
                    _this.props.addItem(response.data)
                    alert('添加成功！')
                })
                .catch(function (error) {
                    alert(error)
                })
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