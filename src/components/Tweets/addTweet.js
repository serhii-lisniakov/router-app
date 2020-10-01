import React, { useState } from 'react'
import { connect } from 'react-redux'
import './Tweets.css'
import { postTweetsAction } from '../../redux/tweetsReducer'

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        tweets: state.tweets.tweets
    }
}

const AddTweetForm = ({users, tweets}) => {
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
    const [posted, setPosted] = useState(false)

    const postTweet = e => {
        e.preventDefault()

        const newTweet = {
            id: tweets.length + 1,
            userId: tweets.length + 1,
            name: name,
            content: content,
            image: image
        }

        postTweetsAction(newTweet)

        setContent('')
        setImage('')
        setPosted(prev => !prev)
        setTimeout(() => setPosted(prev => !prev), 2000)
    }

    return (
        <form onSubmit={postTweet} className='addUserForm addTweetForm'>
            <label> Name: 
                <select value={name} onChange={e => setName(e.target.value)}>
                    {users.map(user => <option key={user.id}>{user.name}</option>)}
                </select>
            </label>
            <label> Content:
                <textarea type="text" value={content} onChange={e => setContent(e.target.value)}/>
            </label>
            <label> Image: 
                <input type="text" value={image} onChange={e => setImage(e.target.value)}/>
            </label>
            <button type='submit'>Post Tweet</button>
            <div>{posted ? 'Posted!' : ''}</div>
        </form>
    )
}

export default connect(mapStateToProps, null)(AddTweetForm)