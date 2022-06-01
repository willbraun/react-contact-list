import { useState } from 'react';

const ContactForm = () => {
    // state of the form, UI state
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
		address: '',
		phoneNumber: ''
    });

    return (
        <div>test</div>
    )
}

export default ContactForm;