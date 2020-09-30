import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";
import {postsReducer} from './postsReducer'
import thunk from 'redux-thunk'
import { usersReducer } from './usersReducer';
import { tweetsReducer } from './tweetsReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    tweets: tweetsReducer
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
