import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

const Tweet = (props) => (
    <div className='tweet'>

        <div>props.key</div>
        <div>props.content</div>
        <img src={props.image} alt=""/>

    </div>
)


class Tweets extends React.Component {

    loadTweets = async() => {
        this.props.getTweets()
    }
    
    render() {
        const {tweets} = this.props
        return (
            <div>
                <button onClick={this.props.loadTweets}>Click</button>
                { tweets.map(tweet => {
                    return (
                        <Tweet 
                            key={tweet.userId}
                            content={tweet.content}
                            image={tweet.image}
                        />
                    )
                })}
            </div>
        )
    }

}

const mapState = (state) => {
    console.log(state)
    return {
        tweets: state.tweets
    }
}

const mapDispatch = (dispatch) => {
    return {
        async getTweets(){
            const tweets = await axios.get('http://domer.tech:9999/tweets/');
            dispatch({
                type: 'RENDER_TWEETS',
                tweets: tweets.data.data
            })
        },
        dispatch
    }
}



export default connect(mapState, mapDispatch)(Tweets)