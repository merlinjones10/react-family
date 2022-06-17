import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Grandad from './components/Grandad';
// import Dad from './components/Dad';


function App() {
  // const lastName = 'Smith';
  const [lastName, setLastName] = useState('Smith');
  const [fistName, setFirstName] = useState('Smith');
  
  return (
    <div>
        <Grandad lastName={lastName} food='chips' setName={setLastName}  />
  

    </div>

  );
}

export default App;
