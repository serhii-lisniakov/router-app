import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { getTweetsAction } from '../../redux/tweetsReducer'
import './Tweets.css'

const Tweet = (props) => {
    return (
        <div className='user tweet'>
            <span>{props.content}</span>
            <img src={props.image} alt=""/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tweets: state.tweets.tweets
    }
}

const Tweets = ({tweets}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTweetsAction())
    }, [])

    return (
        <div className='users-container'>
            {tweets.map((tweet) => {
                return (
                    <Tweet 
                        key={tweet.id}
                        image={tweet.image}
                        content={tweet.content}
                    />
                )
            })}
        </div>
    )
}

export default connect(mapStateToProps, null)(Tweets)