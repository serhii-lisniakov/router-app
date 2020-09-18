import React from 'react';
import checkIco from './img/check.svg'
import shareIco from './img/share.svg'
import repostIco from './img/repost.svg'
import likeIco from './img/like.svg'
import commentIco from './img/comment.svg'

const Post = (props) => (
    <div className="post">
        <div className="post-header">
            <div className="post-avatar">
                <img src={props.photo} alt=""/>
            </div>
            <div className="post-info">
                <div className="post-username">
                  <span className="post-username-name">{props.name}</span>
                  <span className="post-username-status"><img src={checkIco} alt=""/></span>
                  <span className="post-username-nickname">{props.nickname}</span> 
                  <span className="post-username-date"> • {props.date}</span>
                </div>
                <div className="post-text">{props.content}</div>
            </div>
        </div>
        <div className="post-main">
          <img src={props.image} alt=""/>
        </div>
        <div className="post-footer">
            <span href=""><img src={commentIco} alt=""/>482</span>
            <span href=""><img src={repostIco} alt=""/>666</span>
            <span href=""><img src={likeIco} alt=""/>48</span>
            <span href=""><img src={shareIco} alt=""/></span>
        </div>
    </div>
)



export default Post;