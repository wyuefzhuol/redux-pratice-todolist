import React, {Component} from 'react'
import { Button, List, Typography, Tooltip, Space } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';

class TodoItem extends Component {
    deleteItem=()=>{
        this.props.deleteItem(this.props.stringItem.id);
    }

    makeTodo=()=>{
        this.props.makeTodo(this.props.stringItem.id, this.props.stringItem.status);
    }

    render() {
        return (<List.Item actions={[<Button danger shape="round" onClick={this.deleteItem}>delete</Button>]}>
            <Tooltip placement="top" title={this.props.stringItem.content}>
                <Typography.Paragraph ellipsis style={{ textDecorationLine: this.props.stringItem.status ? 'line-through' : 'none' }} onClick={this.makeTodo}>
                    <Space size={'middle'}>
                        {this.props.stringItem.status ? <CheckCircleTwoTone style={{ fontSize: '20px' }} twoToneColor="#52c41a" /> : ''}
                        {this.props.stringItem.content}</Space></Typography.Paragraph>
            </Tooltip>
        </List.Item>)
    }
}

export default TodoItem;