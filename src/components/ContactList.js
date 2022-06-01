import Contact from './Contact.js';

const ContactList = ({list}) => {

    const contacts = list.map((contact, i) => <Contact key={i} {...contact}/>)

    return (
        <ul className='contact-list'>
            {contacts}
        </ul>
    )
}

export default ContactList;