const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validZipCodeRegex = RegExp('^[0-9]{5}$');
const validNPIRegex = RegExp('^[0-9]{11}$');

export default function ValidateRegistration(values){
    let errors = {};
    
    if(!validNPIRegex.test(values.npi)){
        errors.npi = 'NPI is invalid';
        
    }
    
    if(!validEmailRegex.test(values.emailAddress)){
        errors.emailAddress = 'Email invalid';
        
    }
    
    if(!validZipCodeRegex.test(values.zip)){
        errors.zip = 'Zipcode is invalid'
        
    }
    return errors;
}