import React, {Component} from "react";
import './post.css'
import Post from './post'

const posts = [
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
]



export default class Posts extends Component {
    render() {
        return (
            <div className="posts-wrapper">
                {posts.map((post) => {
                    return (
                        <Post 
                            key={post.key}
                            name={post.author.name} 
                            photo={post.author.photo}  
                            nickname={post.author.nickname} 
                            content={post.content} 
                            date={post.date} 
                            image={post.image}
                        />
                    )
                })}
            </div>
        )
    }
}