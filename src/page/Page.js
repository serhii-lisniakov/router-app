import React from 'react'
import {RenderIf} from '../renderIf'
import {Banner} from '../components/Banner/Banner'
import Contacts from '../components/Contacts/Contacts'


import './Page.css'
import Posts from '../components/Posts/Posts'
import Fotos from '../components/Fotos/Fotos'

// export const HomePage = () => {
//     return (
//         <div className='page page-posts'>
//             <div className="container">
//                 <Banner />
//                 <p className="home-text">Are we alone in the universe?</p>
//             </div>
//         </div>
//     )
// }
// export const PostsPage = () => {
//     return (
//         <div className='page page-posts'>
//             <div className="container">
//                 <Posts/>
//             </div>
//         </div>
//     )
// }
// export const FotosPage = () => {
//     return (
//         <div className='page page-fotos'>
//             <div className="container">
//                 <Fotos />
//             </div>
//         </div>
//     )
// }
// export const ContactsPage = () => {
//     return (
//         <div className='page page-contacts'>
//             <div className="container">
//                 <Contacts/>
//             </div>
//         </div>
//     )
// }
// export const ErrorPage = () => {
//     return (
//         <div className='page page-error'>
//             <div className="container">
//                 <div>Error 404. Page not found.</div>
//             </div>
//         </div>
//     )
// }


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