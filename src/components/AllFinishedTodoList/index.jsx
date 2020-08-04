import React, {Component} from 'react';
import FinishedTodoList from '../FinishedTodoList';

class AllFinishedTodoList extends Component {
    render() {
        return (<table border="1">
        <thead>
          <tr><th>Finished Todo List</th></tr>
        </thead>
        <tbody>
          <tr><td><FinishedTodoList/></td></tr>
        </tbody>
      </table>)
    }
}
export default AllFinishedTodoList;