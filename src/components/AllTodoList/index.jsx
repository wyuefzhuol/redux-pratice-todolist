import React, {Component} from 'react';
import TodoInput from '../TodoInput';
import TodoList from '../TodoList';
import { getTodoList, addItemAction, deleteItemAction, makeTodoAction } from '../../action/addItemAction';
import { connect } from 'react-redux';
import AxiosRequest from '../../request/AxiosRequest';
import { Spin } from 'antd';

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

    deleteItem = (id) => {
        AxiosRequest.delete('/'+id).then((response) => {
            this.props.delete(id)
            alert(response.data.content+'删除成功！')
        }).catch((error) => {
            alert(error)
        })
    }

    makeTodo = (id, status) => {
        AxiosRequest.put('/'+id, { status: !status }).then((response) => {
            this.props.updateStatus(id)
            //alert('状态改变！')
        }).catch((error) => {
            alert(error)
        })
    }

    render() {
        return (<div>
          <Spin spinning={this.props.loading}>
          <TodoInput addItem={this.addItem} />
          <TodoList stringList={this.props.stringList} deleteItem={this.deleteItem} makeTodo={this.makeTodo} />
          </Spin>
        </div>)
    }
}

const mapStateToProps = (state) => {
  return {
      stringList: state.stringReducer.stringList,
      loading: state.loadingReducer.loading
  }
}

const mapDispatchToProps = ({
  getTodoList: getTodoList,
  addTodoItem: addItemAction,
  delete: deleteItemAction,
  updateStatus: makeTodoAction
})

export default connect(mapStateToProps, mapDispatchToProps)(AllTodoList);