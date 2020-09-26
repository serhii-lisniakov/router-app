import React from 'react'
import {connect } from 'react-redux'
import {createPost} from '../../redux/actionCreators'

class PostForm extends React.Component {
    state = {
        author: 'Ilon Musk',
        imageLink: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg',
        text: '',
    }

    inputHandler = (field, e) => {
        this.setState({[field]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        const newPost = {
            key: Date.now().toString(),
            author: {
                name: this.state.author,
                photo: this.state.imageLink,
                nickname: '@' + this.state.author,
            },
            content: this.state.text,
            image: '',
            date: new Date().toLocaleDateString(),
        }

        this.props.createPost(newPost)

        this.setState({
            text: '',
        })
    }


    render() {
        const {posts} = this.props;
        return (
            <form className='post-form'>
                    <div className='post-form-title'>Add Post</div>
                    <div className="post-form-content">
                        <div>Author: 
                            <select value={this.state.author} onChange={this.inputHandler.bind(this, 'author')}>
                                {posts.map(post => (<option key={post.key}>{post.author.name}</option>))}
                            </select>
                        </div>
                        <div>Avatar: <input onChange={this.inputHandler.bind(this, 'imageLink')} type="text" value={this.state.imageLink}/></div>
                        <div className='text-area'><textarea value={this.state.text} onChange={this.inputHandler.bind(this, 'text')}></textarea></div>
                    </div>
                    <button className='submit' type='submit' onClick={this.submitHandler}>SUBMIT</button>
            </form>
        )
    }
}

const mapDispatch = { 

        createPost
}

export default connect(null, mapDispatch)(PostForm)