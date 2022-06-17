import React from 'react'
import { faker } from '@faker-js/faker';



const Dad = (props) => {
  return (
    <div>
    <h2>Steve {props.lastName}</h2>
    <button onClick={() => {
        props.setLastName(faker.name.lastName())
    }}>Change My Name!</button>
    </div>
  )
}

export default Dad