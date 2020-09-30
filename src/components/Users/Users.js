import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { getUsersAction } from '../../redux/usersReducer'
import './Users.css'

const User = (props) => {
    return (
        <div className='user'>
            <img src={props.avatar} alt=""/>
            <span>{props.name}</span>
            <span className='username'>{props.username}</span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

const Users = ({users}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersAction())
    }, [])

    return (
        <div className='users-container'>
            {users.map((user) => {
                return (
                    <User 
                        key={user.id}
                        name={user.name}
                        avatar={user.avatar}
                        username={user.username}
                    />
                )
            })}
        </div>
    )
}

export default connect(mapStateToProps, null)(Users)