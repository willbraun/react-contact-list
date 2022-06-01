import Contact from './components/Contact';

const ContactList = ({list}) => {

    const contacts = list.map((contact, i) => <Contact key={i} {...contact}/>)

    return (
        {contacts}
    )
}

export default ContactList;