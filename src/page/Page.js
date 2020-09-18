import React from 'react'
import {RenderIf} from '../renderIf'
import {Banner} from '../components/Banner/Banner'
import Contacts from '../components/Contacts/Contacts'


import './Page.css'
import Posts from '../components/Posts/Posts'
import Fotos from '../components/Fotos/Fotos'

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
                <RenderIf condition={props.class === 'page page-error'}>
                    <div>Error 404. Page not found.</div>
                </RenderIf>
            </div>
        </div>
    )
}

export default Page