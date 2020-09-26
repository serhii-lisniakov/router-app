import React, {Component} from 'react'
import {NavLink, withRouter} from "react-router-dom";
import './Header.css'


class Header extends Component {


    render() {
        return (
            <div className="header-wrapper">
                <div className="container header">
                    <NavLink to="/home" activeClassName="page-home" className="header-link">Home</NavLink>
                    <NavLink to="/posts" activeClassName="page-posts" className="header-link">Posts</NavLink>
                    <NavLink to="/fotos" activeClassName="page-fotos" className="header-link">Fotos</NavLink>
                    <NavLink to="/contacts" activeClassName="page-contacts" className="header-link">Contacts</NavLink>
                    <NavLink to="/users" activeClassName="page-users" className="header-link">Users</NavLink>
                    <NavLink to="/addUser" activeClassName="page-addUser" className="header-link">Add User</NavLink>
                    <NavLink to="/tweets" activeClassName="page-tweets" className="header-link">Tweets</NavLink>
                    <NavLink to="/addTweet" activeClassName="page-addTweet" className="header-link">Add Tweet</NavLink>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)