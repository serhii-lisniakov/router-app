const initialState = []

export const tweetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RENDER_TWEETS':
            return { 
                ...state, 
                // posts: state.posts.concat([action.payload])
                tweets: [action.payload, ...state.tweets]
            }
        default: return state
    }
} 