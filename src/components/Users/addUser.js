import React, { useState } from 'react'
import { connect } from 'react-redux'
import './Users.css'
import { postUsersAction } from '../../redux/usersReducer'

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

const AddUserForm = ({users}) => {
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [avatar, setAvatar] = useState('https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg')
    const [posted, setPosted] = useState(false)

    const postUser = e => {
        e.preventDefault()

        const newUser = {
            id: users.length + 1,
            name: name,
            username: '@' + userName,
            avatar: avatar
        }

        postUsersAction(newUser)

        setName('')
        setUserName('')
        setAvatar('')
        setPosted(prev => !prev)
        setTimeout(() => setPosted(prev => !prev), 2000)
    }

    return (
        <form onSubmit={postUser} className='addUserForm'>
            <label> Name: 
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            </label>
            <label> Username:
                <input type="text" value={userName} onChange={e => setUserName(e.target.value)}/>
            </label>
            <label> Avatar: 
                <input type="text" value={avatar} onChange={e => setAvatar(e.target.value)}/>
            </label>
            <button type='submit'>Post User</button>
            <div>{posted ? 'Posted!' : ''}</div>
        </form>
    )
}

export default connect(mapStateToProps, null)(AddUserForm)