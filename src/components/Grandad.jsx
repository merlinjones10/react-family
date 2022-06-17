import React from 'react'
import Dad from './Dad';
// rafce
const Grandad = (props) => {

  return (
    <>
    <h1>John {props.lastName} </h1>
    <Dad lastName={props.lastName} setLastName={props.setName}/>
    </>
  )
}

export default Grandad