import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/">Redux Auth</Link>
                <Link to="/signup">signup</Link>
                <Link to="/signin">signin</Link>
                <Link to="/signout">signout</Link>
                <Link to="/feature">Feature</Link>
            </div>
        )
    }
}
export default Header;