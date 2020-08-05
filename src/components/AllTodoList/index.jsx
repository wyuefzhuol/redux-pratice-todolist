import React, {Component} from 'react';
import TodoInput from '../TodoInput';
import TodoList from '../TodoList';
import Axios from 'axios';
import { getTodoList } from '../../action/addItemAction';
import { connect } from 'react-redux';

class AllTodoList extends Component {
    componentDidMount() {
      const _this = this
      Axios.get('https://5e9ec500fb467500166c4658.mockapi.io/todos')
      .then(function (response) {
        _this.props.getTodoList(response.data)
      })
      .catch(function (error) {
        alert(error)
      })
    }

    //TODO: 把子组件的函数传入
    render() {
        return (<table border="1">
        <thead>
          <tr><th><TodoInput /></th></tr>
        </thead>
        <tbody>
          <tr><td><TodoList/></td></tr>
        </tbody>
      </table>)
    }
}

const mapDispatchToProps = ({
  getTodoList: getTodoList
})

export default connect(null, mapDispatchToProps)(AllTodoList);