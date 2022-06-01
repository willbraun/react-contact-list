const Contact = ({firstName, lastName, address, phoneNumber}) => {
    return (
        <li className="contact">
            <p>{firstName} {lastName} </p>
            <address>{address}</address>
            <p>{phoneNumber}</p>
        </li>
    )
}

export default Contact;