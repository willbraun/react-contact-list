const Contact = ({firstName, lastName, address, phoneNumber}) => {
    return (
        <li>
            <p>{firstName} {lastName}</p>
            <p><address>{address}</address></p>
            <p>{phoneNumber}</p>
        </li>
    )
}

export default Contact;