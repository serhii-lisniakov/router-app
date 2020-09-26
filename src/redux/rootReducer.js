import { combineReducers } from "redux";
import {postsReducer} from './postsReducer'
import {tweetsReducer} from './tweetsReducer'

export const rootReducer = combineReducers({
    posts: postsReducer,
    tweets: tweetsReducer,
})