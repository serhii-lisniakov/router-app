import axios from 'axios'

const initialState = {
    tweets: []
}

export const getTweetsAction = () => {
    return async dispatch => {
        const tweets = await axios.get('https://domer.tech:9999/tweets/')
        dispatch({
            type: 'GET_TWEETS',
            payload: tweets.data.data
        })
    }
}

export const postTweetsAction = (tweet) => {
    return async (dispatch, tweet) => {
        await axios.post('https://domer.tech:9999/tweets/', tweet)
        dispatch({
            type: 'POST_TWEET',
            payload: tweet
        })
    }
}



export const tweetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TWEETS':
            return {
                ...state,
                tweets: action.payload
            }
        case 'POST_TWEET':
        return {
            ...state,
            tweets: [...state.tweets, action.payload]
        }
        default: return state;
    }
}