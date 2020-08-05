import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

class TodoMenu extends Component {
    render() {
        return (<Menu mode="horizontal">
            <Menu.Item key="allList">
                <Link to='/'>首页</Link>
            </Menu.Item>
            <Menu.Item key="finishedList">
                <Link to='/finished'>已完成列表</Link>
            </Menu.Item>
        </Menu>)
    }
}

export default TodoMenu;