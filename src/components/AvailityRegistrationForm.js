import React from 'react';
import useAvailityRegistrationForm from './useAvailityRegistrationForm'
import ValidateRegistration from './ValidateRegistration'

const AvailityRegistrationForm = (submitForm) => {
  const { handleChange, 
          handleSubmit,
          errors,
          values } = useAvailityRegistrationForm(submitForm, ValidateRegistration);
  
    return(
      <form className="form" onSubmit={handleSubmit}>
      <div className="container">
      <div className="row">
          <div className="col">
              <label className="form-label">First Name</label>
              <input type="text" 
              className="form-control" 
              name="firstName"
              required
              value={values.firstName}
              onChange={handleChange} />
              
              </div>
              
  

          <div className="col">
              <label className="form-label">Last Name</label>
              <input type="text" 
              className="form-control" 
              name="lastName" 
              required
              value={values.lastName}
              onChange={handleChange} /></div>

      </div>

      <div className="row">
        <div className="col">
            <label className="form-label">NPI</label>
            <input type="text" 
            className="form-control" 
            name="npi" required 
            value={values.npi}
            onChange={handleChange}/>
            {errors.npi && <p>{errors.npi}</p>}
            </div>   
        </div>

        <div className="row">
        <div className="col">
            <label className="form-label">Email address</label>
            <input type="email" 
            className="form-control" 
            name="emailAddress" 
            placeholder="name@example.com" 
            required 
            value={values.emailAddress}
            onChange={handleChange} />
            {errors.emailAddress && <p>{errors.emailAddress}</p>}
            </div>
      </div>

      <div className="col-12">
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" 
            className="form-control" 
            name="address" 
            placeholder="1234 Main St" 
            required 
            value={values.address}
            onChange={handleChange}/>
          </div>

          <div className="col-12">
            <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
            <input type="text" 
            className="form-control" 
            name="address2" 
            placeholder="Apartment or suite" />
          </div>

          <div className="col-12">
            <label htmlFor="city" className="form-label">City</label>
            <input type="text" 
            className="form-control" 
            name="city" 
            placeholder="Anytown" 
            required 
            value={values.city}
            onChange={handleChange}/>
          </div>
          
          <div className="col-md-4">
            <label htmlFor="state" className="form-label">State</label>
            <select className="form-select" 
            name="state" 
            required 
            value={values.state}
            onChange={handleChange}>
              <option value="">Choose...</option>
              <option>Florida</option>
              <option>Indiana</option>
            </select>
          </div>

          <div className="col-md-3">
            <label htmlFor="zip" className="form-label">Zip</label>
            <input type="text" 
            className="form-control" 
            name="zip" 
            placeholder="32323" 
            required 
            value={values.zip}
            onChange={handleChange}/>
            {errors.zip && <p>{errors.zip}</p>}
          </div>
          <hr className="my-4" />
          
          <button className="w-100 btn btn-primary btn-lg" 
          type="submit">Save</button>
        </div>
        </form>
      );
}

export default AvailityRegistrationForm;