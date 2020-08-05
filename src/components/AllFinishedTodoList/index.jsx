import React, {Component} from 'react';
import FinishedTodoList from '../FinishedTodoList';
import { connect } from 'react-redux';
import AxiosRequest from '../../request/AxiosRequest';
import { deleteItemAction, makeTodoAction } from '../../action/addItemAction';
import { Spin } from 'antd';

class AllFinishedTodoList extends Component {
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
        return (<Spin spinning={this.props.loading}>
            <FinishedTodoList stringList={this.props.stringList} deleteItem={this.deleteItem} makeTodo={this.makeTodo}/>
          </Spin>)
    }
}

const mapStateToProps = (state) => {
  return {
      stringList: state.stringReducer.stringList.filter((item, index) => item.status === true),
      loading: state.loadingReducer.loading
  }
}

const mapDispatchToProps = ({
  delete: deleteItemAction,
  updateStatus: makeTodoAction
})

export default connect(mapStateToProps, mapDispatchToProps)(AllFinishedTodoList);