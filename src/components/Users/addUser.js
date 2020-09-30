import React, { useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import './Users.css'

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

const AddUserForm = ({users}) => {
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [avatar, setAvatar] = useState('https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg')

    const postUser = e => {
        e.preventDefault()

        const newUser = {
            id: users.length + 1,
            name: name,
            username: '@' + userName,
            avatar: avatar
        }

        console.log(newUser)
        axios.post('http://domer.tech:9999/users/', newUser)

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
        </form>
    )
}

export default connect(mapStateToProps, null)(AddUserForm)