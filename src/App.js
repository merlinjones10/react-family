import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Grandad from './components/Grandad';
// import Dad from './components/Dad';


function App() {
  // const lastName = 'Smith';
  const [lastName, setLastName] = useState('Smith');
  // const [firstName, setFirstName] = useState('Smith');
  const [job, setJob] = useState('unemployed')
  const [company, setCompany] = useState('Limited LTD')
  
  return (
    <div>
        <Grandad lastName={lastName} food='chips' setName={setLastName} job={job} setJob={setJob} company={company} setCompany={setCompany} />
  
      <p>Test</p>
    </div>
    

  );
}

export default App;
