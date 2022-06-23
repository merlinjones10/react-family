import React from 'react'
import { faker } from '@faker-js/faker';



const Son = (props) => {
  return (
    <div>
    <h3>Son: Michael {props.lastName}</h3>
    <h4>Job: {props.job} </h4>
    <button onClick={() => {
        props.setLastName(faker.name.lastName())
    }}>Change My Name!</button>
   
    <button onClick={() => {
        props.setJobName(faker.name.jobTitle())
    }}>Change My Job!</button>
    
     <button onClick={() => {
        props.setCompany(faker.company.companyName())
    }}>Click for New Company!</button>
    </div>
    
  )
}

export default Son