import axios from 'axios'

const initialState = {
    users: []
}

export const getUsersAction = () => {
    return async dispatch => {
        const users = await axios.get('https://cors-anywhere.herokuapp.com/http://domer.tech:9999/users')
        dispatch({
            type: 'GET_USERS',
            payload: users.data.data
        })
    }
}

export const postUsersAction = async (user) => {
    await axios.post('https://cors-anywhere.herokuapp.com/http://domer.tech:9999/users/', user)
}



export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload
            }
        case 'POST_USER':
        return {
            ...state,
            users: [...state.users, action.payload]
        }
        default: return state;
    }
}