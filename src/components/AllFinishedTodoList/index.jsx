import React, {Component} from 'react';
import FinishedTodoList from '../FinishedTodoList';
import { connect } from 'react-redux';

class AllFinishedTodoList extends Component {
    render() {
        return (<table border="1">
        <thead>
          <tr><th>Finished Todo List</th></tr>
        </thead>
        <tbody>
          <tr><td><FinishedTodoList stringList={this.props.stringList}/></td></tr>
        </tbody>
      </table>)
    }
}

const mapStateToProps = (state) => {
  return {
      stringList: state.stringReducer.stringList
  }
}

export default connect(mapStateToProps, null)(AllFinishedTodoList);