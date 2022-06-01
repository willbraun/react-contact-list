import Contact from './Contact.js';

const ContactList = ({list}) => {

    const contacts = list.map((contact, i) => <Contact key={i} {...contact}/>)

    return (
        <ul>
            {contacts}
        </ul>
    )
}

export default ContactList;