import React, {Component} from "react";
import { connect } from 'react-redux'
import './post.css'
import Post from './post'
import PostForm from './PostForm'

class Posts extends Component {

    componentDidMount() {
        // console.log(this.state)
    }

    componentDidUpdate() {
        // console.log(this.state)
    }

    render() {
        const {posts} = this.props;
        return (
            <div className="posts-wrapper">
                <PostForm posts={posts}/>
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

const mapState = state => {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapState, null)(Posts)