import React,{useState} from 'react'
import Biography from './steps/Biography'
import Confirm from './steps/Confirm'
import UserDetails from './steps/UserDetails'
import Welcome from './steps/Welcome'
// import {Button} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function CreateEntreprisesProfile() {
    //Steps
  const [activeStep, setActiveStep] = useState(0)

  const getSteps = () => {
    // return ["Welcome", "User Details", "Biography", "Confirm"]
    return [ "User Details", "Confirm"]
  }

  const steps = getSteps()

  //State variables
  const [multiFormValues, setMultiFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    job: "",
    city: "",
    country: ""
  })

  //Navigates to the next page
  const handleNext = () => {

    setActiveStep((nextStep) => nextStep + 1)
  }
  //Navigates to the Previous page
  const handleBack = () => {
    setActiveStep((previousStep) => previousStep - 1)
  }

  //Handle form value state on change
  const handleChange = (input) => (e) => {
    setMultiFormValues({...multiFormValues, [input]: e.target.value})
  }
    return (
        <div className="container">
      {/* {activeStep === 0 && (
        <Welcome handleChange={handleChange} />
      )} */}
      {activeStep === 0 && (
        <UserDetails values={multiFormValues} handleChange={handleChange} handleNext={handleNext} />
      )}
      {/* {activeStep === 1 && (
        <Biography values={multiFormValues} handleChange={handleChange} />
      )} */}
      {activeStep === 1 && (
        <Confirm values={multiFormValues} handleChange={handleChange} />
      )}

      {/* <Button disabled={activeStep === 0} className="mr-5 mt-4" onClick={handleBack} style={activeStep === 3 ? {display: 'none'} : {}} >Back</Button>

      <Button className="ml-5" variant="primary" type="submit" onClick={handleNext} style={activeStep === 3 ? {display: 'none'} : {}} >{}{activeStep === steps.length - 2 ? 'Submit' : 'Next'}</Button> */}
    </div>

    );
}

export default CreateEntreprisesProfile;
