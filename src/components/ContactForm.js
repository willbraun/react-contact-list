import { useState } from 'react';

const ContactForm = ({addToList}) => {
    const blank = {
        firstName: '',
        lastName: '',
		address: '',
		phoneNumber: ''
    }
    
    const [state, setState] = useState(blank);

    const submitForm = (e) => {
        e.preventDefault();
        addToList(state)
        setState(blank);
        e.target.reset();
    }

    return (
        <div className='flex-1'>
            <form className='contact-form' onSubmit={submitForm}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" onChange={(e) => setState({...state, firstName: e.target.value})}/>
    
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" onChange={(e) => setState({...state, lastName: e.target.value})}/>
    
                <label htmlFor="address">Address</label>
                <input type="text" id="address" onChange={(e) => setState({...state, address: e.target.value})}/>
    
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" id="phoneNumber" onChange={(e) => setState({...state, phoneNumber: e.target.value})}/>
    
                <button type='submit'>Add Contact</button>
            </form>
        </div>
    )
}

export default ContactForm;