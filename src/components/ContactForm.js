import { useState } from 'react';

const ContactForm = ({addToList}) => {
    const blank = {
        firstName: '',
        lastName: '',
		address: '',
		phoneNumber: ''
    }
    
    const [state, setState] = useState(blank);

    return (
        <div className='flex-1'>
            <form className='contact-form'>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" onChange={(e) => state.firstName = setState(e.target.value)}/>
    
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" onChange={(e) => state.lastName = setState(e.target.value)}/>
    
                <label htmlFor="address">Address</label>
                <input type="text" id="address" onChange={(e) => state.address = setState(e.target.value)}/>
    
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" id="phoneNumber" onChange={(e) => state.phoneNumber = setState(e.target.value)}/>
    
                <button type='submit'>Add Contact</button>
            </form>
        </div>
    )
}

export default ContactForm;