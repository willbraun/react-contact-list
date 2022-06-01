const Contact = ({firstName, lastName, address, phoneNumber}) => {
    return (
        <div>
            <p>{firstName} {lastName}</p>
            <p><address>{address}</address></p>
            <p>{phoneNumber}</p>
        </div>
    )
}

export default Contact;