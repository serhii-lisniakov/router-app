import React, {Component} from 'react'
import './contacts.css'
import Contact from './Contact'
import maleIco from './img/male.svg'
import femaleIco from './img/female.svg'
import { Route,Link } from 'react-router-dom'
import FullContact from './FullContact'


export const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
},{
    firstName: "Тарас",
    lastName: "Шевченко",
    phone: "+380932219566",
    gender: "male"
},{
    firstName: "Леся",
    lastName: "Українка",
    phone: "+380901294583",
    gender: "female"
},{
    firstName: "Ліна",
    lastName: "Костенко",
    phone: "+380910391854",
    gender: "female"
},{
    firstName: "Мелашка",
    lastName: "Кайдаш",
    phone: "+380950947291",
    gender: "female"
},{
    firstName: "Юджин",
    lastName: "Крабс",
    phone: "+380919376483",
    gender: "male"
}];


contacts.forEach((contact, i) => {
    contact.key = i
    if (!contact.gender) contact.gender = 'unknown'
})


export default class Contacts extends Component {
    state = {
        contacts: [...contacts],
        search: ""
    }

    handleSearchChange = (field, e) => {
        this.setState({
            [field]: e.target.value,
        })

        this.setState(prevState => {
            return {
                contacts: contacts.filter(contact => {
                    for (let key in contact) {
                        if (contact[key].toString().toLowerCase().indexOf(prevState.search.toLowerCase()) !== -1) return contact
                    }
                })
            }
        })
    }

    handleCheckboxChange = () => {
        const male = document.querySelector('#checkMale')
        const female = document.querySelector('#checkFemale')
        const unknown = document.querySelector('#checkUnknown')

        this.setState(() => {
            if (male.checked && female.checked && unknown.checked) {
                return {
                    contacts: contacts
                }
            }
            else if (!male.checked && !female.checked && !unknown.checked) {
                return {
                    contacts: []
                }
            }
            else if (male.checked && female.checked) {
                return {
                    contacts: contacts.filter(contact => contact.gender !== 'unknown')
                }
            }
            else if (male.checked && unknown.checked) {
                return {
                    contacts: contacts.filter(contact => contact.gender !== 'female')
                }
            }
            else if (female.checked && unknown.checked) {
                return {
                    contacts: contacts.filter(contact => contact.gender !== 'male')
                }
            }
            else if (male.checked) {
                return {
                    contacts: contacts.filter(contact => contact.gender === 'male')
                }
            }
            else if (female.checked) {
                return {
                    contacts: contacts.filter(contact => contact.gender === 'female')
                }
            }
            else if (unknown.checked) {
                return {
                    contacts: contacts.filter(contact => contact.gender === 'unknown')
                }
            }
            
        })
    }

    render() {
        return (
            <div className="contacts-wrapper">
                <div className="contacts-search">
                    <div className="contacts-conditions">
                        <label><input id="checkMale" onChange={this.handleCheckboxChange} defaultChecked type="checkbox"/><img src={maleIco} alt=""/></label>
                        <label><input id="checkFemale" onChange={this.handleCheckboxChange} defaultChecked type="checkbox"/><img src={femaleIco} alt=""/></label>
                        <label><input id="checkUnknown" onChange={this.handleCheckboxChange} defaultChecked type="checkbox"/>no gender</label>
                    </div>
                    <span>Search: </span>
                    <input type="text" placeholder="Enter the name or phone" value={this.state.search} onChange={this.handleSearchChange.bind(this, 'search')}/>
                </div>
                <div className="contacts-items">
                    <Route path={`/contacts/:firstName`} component={FullContact}/>
                    <Route path={`/contacts`} render={() => (
                        <>
                            {this.state.contacts.map(contact => (
                                <Link to={`/contacts/${contact.firstName}`} key={contact.key}>
                                    <Contact
                                        key={contact.key}
                                        firstName={contact.firstName} 
                                        lastName={contact.lastName}  
                                        phone={contact.phone} 
                                        gender={contact.gender} 
                                        id={contact.key}
                                    />
                                </Link>
                                
                            ))}
                        </>
                    )}/>
                    
                </div>
                <div className="contacts-count">Contacts: {this.state.contacts.length}</div>
            </div>
        )
    }
}