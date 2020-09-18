import React from "react";
import {contacts} from "./Contacts";
import {RenderIf} from "../../renderIf";
import maleIco from './img/male.svg'
import femaleIco from './img/female.svg'

const FullContact = (props) => {
    const contact = contacts.find(contact => contact.firstName === props.match.params.firstName);

    return (
        <div className="full-foto-wrapper" 
             onClick={(e) => Array.from(e.target.classList).includes("full-foto-wrapper") ? props.history.goBack() : false}
        >
            <RenderIf condition={contact.firstName}>
                <div className='full-contact-wrapper'>
                    <div className='full-contact-header'>
                        <div><span>{contact.firstName}</span> <span>{contact.lastName}</span></div>
                        <img className='full-contact-gender' src={contact.gender === 'male' ? maleIco : (contact.gender === 'female') ? femaleIco : "unknown"} alt=""/>
                    </div>
                    <div>{contact.phone}</div>
                    <div className='full-contact-about'>
                        <div>About:</div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta at laudantium quidem itaque ipsa facilis temporibus perspiciatis, labore deserunt molestias corporis nemo odio nihil debitis, corrupti accusamus vel eveniet?
                    </div>
                </div>
            </RenderIf>
        </div>
    )
}

export default FullContact;