import React from 'react'
import maleIco from './img/male.svg'
import femaleIco from './img/female.svg'



const Contact = (props) => (
    <div className="contact">
        <div className="contact-name">
            <span>{props.firstName}</span> <span>{props.lastName}</span>
        </div>
        <div className="contact-number">{props.phone}</div>
        <div className="contact-gender"><img src={props.gender === 'male' ? maleIco : (props.gender === 'female') ? femaleIco : "unknown"} alt=""/></div>
    </div>
)

export default Contact