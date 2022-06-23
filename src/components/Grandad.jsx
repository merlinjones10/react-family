import React from 'react'
import Dad from './Dad';
import Son from './son';
// rafce
const Grandad = (props) => {

  return (
    <>
    <h1>Grandad: John {props.lastName} </h1>
    <Dad lastName={props.lastName} setLastName={props.setName}  company={props.company} setCompany={props.setCompany}/>
    <Son lastName={props.lastName} setLastName={props.setName} job={props.job} setJobName={props.setJob} company={props.company} setCompany={props.setCompany}/>
    </>
  )
}

export default Grandad