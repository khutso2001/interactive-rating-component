import './App.css';
import Main from "./Main";
import NumberCheckBox from "./NumberCheckBox";
import SubmitButton from "./SubmitButton";
import SubmitAfter from "./SubmitAfter";
import { useState } from 'react';
function App() {
  const [isSubmitted, setIsSubmitted]=useState(false);
  const [items,setItems]=useState('');
  return (
    <div className="App">
    {!isSubmitted && (
      <div className='container'>
      <Main/>
      <div  className='number-checkbox'>
        <NumberCheckBox number="1"  setItems={setItems}/>
        <NumberCheckBox number="2" setItems={setItems} />
        <NumberCheckBox number="3" setItems={setItems} />
        <NumberCheckBox number="4"  setItems={setItems}/>
        <NumberCheckBox number="5"  setItems={setItems}/>
      </div>
      <SubmitButton setIsSubmitted={setIsSubmitted}/>
      </div>
    )}
    
      {isSubmitted &&  <SubmitAfter items={items} /> }
      
    </div>
  );
}

export default App;
