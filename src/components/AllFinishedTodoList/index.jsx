import React, {Component} from 'react';
import FinishedTodoList from '../FinishedTodoList';
import { connect } from 'react-redux';
import { AxiosRequest } from '../../request/AxiosRequest';
import { deleteItemAction, makeTodoAction } from '../../action/addItemAction';

class AllFinishedTodoList extends Component {
    deleteItem = (id, index) => {
        AxiosRequest.delete('/'+id).then((response) => {
            this.props.delete(index)
            alert(response.data.content+'删除成功！')
        }).catch((error) => {
            alert(error)
        })
    }

    makeTodo = (id, status, index) => {
        AxiosRequest.put('/'+id, { status: !status }).then((response) => {
            this.props.updateStatus(index)
            //alert('状态改变！')
        }).catch((error) => {
            alert(error)
        })
    }

    render() {
        return (<FinishedTodoList stringList={this.props.stringList} deleteItem={this.deleteItem} makeTodo={this.makeTodo}/>)
    }
}

const mapStateToProps = (state) => {
  return {
      stringList: state.stringReducer.stringList.filter((item, index) => item.status === true)
  }
}

const mapDispatchToProps = ({
  delete: deleteItemAction,
  updateStatus: makeTodoAction
})

export default connect(mapStateToProps, mapDispatchToProps)(AllFinishedTodoList);