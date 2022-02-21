import { useState, useEffect } from 'react'
import ValidateRegistration from './ValidateRegistration';


const useAvailityRegistrationForm = ValidateRegistration => {
    const [ values, setValues ] = useState({
        firstName: '',
        lastName: '',
        npi: '',
        emailAddress: '',
        address: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
    });

    const [errors, setErrors] = useState({});
    
    
    const handleChange = e => {
        const { name, value } = e.target
       
        setValues({
            ...values,
            [name]: value
        })
        
      };
      

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(ValidateRegistration(values));
        
    };

   
    return { handleChange, values, handleSubmit, errors };   
}

export default useAvailityRegistrationForm;