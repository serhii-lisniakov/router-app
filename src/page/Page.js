import React from 'react'
import {RenderIf} from '../renderIf'
import {Banner} from '../components/Banner/Banner'
import Contacts from '../components/Contacts/Contacts'


import './Page.css'
import Posts from '../components/Posts/Posts'
import Fotos from '../components/Fotos/Fotos'
import Users from '../components/Users/Users'
import AddUserForm from '../components/Users/addUser'
import Tweets from '../components/Tweets/Tweets'
import AddTweetForm from '../components/Tweets/addTweet'

const Page = (props) => {
    return (
        <div className={props.class}>
            <div className="container">
                <RenderIf condition={props.class === 'page page-home'}>
                    <Banner />
                    <p className="home-text">Are we alone in the universe?</p>
                </RenderIf>
                <RenderIf condition={props.class === 'page page-posts'}>
                    <Posts />
                </RenderIf>
                <RenderIf condition={props.class === 'page page-fotos'}>
                    <Fotos />
                </RenderIf>
                <RenderIf condition={props.class === 'page page-contacts'}>
                    <Contacts/>
                </RenderIf>
                <RenderIf condition={props.class === 'page page-users'}>
                    <Users/>
                </RenderIf>
                <RenderIf condition={props.class === 'page page-addUser'}>
                    <AddUserForm />
                </RenderIf>
                <RenderIf condition={props.class === 'page page-tweets'}>
                    <Tweets />
                </RenderIf>
                <RenderIf condition={props.class === 'page page-addTweet'}>
                    <AddTweetForm />
                </RenderIf>
                <RenderIf condition={props.class === 'page page-error'}>
                    <div>Error 404. Page not found.</div>
                </RenderIf>
            </div>
        </div>
    )
}

export default Page