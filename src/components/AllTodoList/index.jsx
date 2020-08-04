import React, {Component} from 'react';
import TodoInput from '../TodoInput';
import TodoList from '../TodoList';

class AllTodoList extends Component {
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
export default AllTodoList;