
import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({firstname:"", lastname:""});
  console.log(formData);
  function changeHandler(event){
    setFormData( {...formData, [event.target.name]: event.target.value});
  }
  return (
    <div className="App">
      <input name='firstname' type="text" placeholder="Enter your first name" onChange={changeHandler} />
      <br />
      <input name='lastname' type="text" placeholder='Enter your last name' onChange={changeHandler} />
    </div>
  );
}

export default App;
