const initialState = {
    posts: [
        {
            key: 4,
            author: {
                name: "Ilon Musk",
                photo: "https://images.pexels.com/photos/2526127/pexels-photo-2526127.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                nickname: "@ilon-space",
            },
            content: "The Mars will be mine",
            image: "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            date: "1 feb.",
        },
        {
            key: 2,
            author: {
                name: "Stormtrooper",
                photo: "https://images.pexels.com/photos/3526022/pexels-photo-3526022.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                nickname: "@Stormtrooper",
            },
            content: "My new look",
            image: "https://images.pexels.com/photos/1437218/pexels-photo-1437218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            date: "1 feb.",
        },
        {
            key: 1,
            author: {
                name: "Anakin Skywalker",
                photo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
                nickname: "@anankin-batya",
            },
            content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
            image: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
            date: "26 mar.",
        },
        {
            key: 3,
            author: {
                name: "Darth Vader",
                photo: "https://images.pexels.com/photos/4618647/pexels-photo-4618647.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                nickname: "@dart-vader",
            },
            content: "Vote for me!!!..",
            image: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            date: "1 feb.",
        }
    ],
}

// action 
export function createPostAction(post) {
    return {
        type: 'CREATE_POST',
        payload: post
    }
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            return { 
                ...state,
                posts: [action.payload, ...state.posts]
            }
        default: return state
    }
} 