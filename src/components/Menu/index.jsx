import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (<div>
            <Link to='/' style={{ color: 'white' }}>首页</Link>
            &nbsp;||&nbsp;
            <Link to='/finished' style={{ color: 'white' }}>已完成列表</Link>
        </div>)
    }
}

export default Menu;