import React from "react";
import { connect } from 'react-redux'
import './post.css'
import Post from './post'
import PostForm from './PostForm'


const mapState = state => {
    return {
        posts: state.posts.posts
    }
}

const Posts = (posts) => {
    return (
        <div className="posts-wrapper">
            <PostForm posts={posts.posts}/>
            {posts.posts.map((post) => {
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

export default connect(mapState, null)(Posts)