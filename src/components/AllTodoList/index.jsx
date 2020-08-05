import React, {Component} from 'react';
import TodoInput from '../TodoInput';
import TodoList from '../TodoList';
import { getTodoList, addItemAction, deleteItemAction, makeTodoAction } from '../../action/addItemAction';
import { connect } from 'react-redux';
import { AxiosRequest } from '../../request/AxiosRequest'

class AllTodoList extends Component {
    componentDidMount() {
      AxiosRequest.get()
      .then((response) => {
        this.props.getTodoList(response.data)
      })
      .catch(function (error) {
        alert(error)
      })
    }

    addItem = (todoContent) => {
      if (todoContent.content !== '') {
        AxiosRequest.post('', todoContent)
            .then((response) => {
                this.props.addTodoItem(response.data)
                alert('添加成功！')
            })
            .catch(function (error) {
                alert(error)
            })
      } else {
          alert('请输入后再点击添加！');
      }
    }

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
        return (<div>
          <TodoInput addItem={this.addItem} />
          <TodoList stringList={this.props.stringList} deleteItem={this.deleteItem} makeTodo={this.makeTodo} />
        </div>)
    }
}

const mapStateToProps = (state) => {
  return {
      stringList: state.stringReducer.stringList
  }
}

const mapDispatchToProps = ({
  getTodoList: getTodoList,
  addTodoItem: addItemAction,
  delete: deleteItemAction,
  updateStatus: makeTodoAction
})

export default connect(mapStateToProps, mapDispatchToProps)(AllTodoList);