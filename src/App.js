import React,{useState} from 'react';
import './App.css';

function App() {
  const [weight,setweight]=useState(0);
  const [height,setheight]=useState(0);
  const [bmi,setbmi]=useState('');
  const [message,setmessage]=useState('');
 
  let calculatebmi= (event) =>{
    event.preventDefault();
    if(weight === 0 || height === 0){
      alert("Invalid Input");
    }else{
      let bmi=(weight / (height / 100) ** 2)
      setbmi(bmi.toFixed(2))
      //logic for message
      if(bmi<18.5){
        setmessage("You are Underweight")
      }
      else if(bmi>=18.5 && bmi<=24.9){
        setmessage("You are Healthy weight")
      }
      else if(bmi>=25 && bmi<=29.9){
        setmessage("You are overweight")
      }
      else{
        setmessage("You are Obese")
      }
    }
  }
  let imgsrc;
   if(bmi<1){
     imgsrc=null;
   }else{
     if(bmi<18.5){
       imgsrc=require('./images/underweight.webp')
     }
     else if(bmi>=18.5 && bmi<=24.9){
       imgsrc=require('./images/healthy.jpg');
     }
     else if(bmi>=25 && bmi<=29.9){
      imgsrc=require('./images/overweight.jpg');
     }
     else{
       imgsrc=require('./images/obesegirl.webp')
     }
   }
  let reload =() =>{
    window.location.reload()
  }
  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'> BMI Calculator</h2>
        <form onSubmit={calculatebmi}>
          <div>
            <label>Weight (Kg)</label>
            <input value={weight} onChange={(e) => setweight(e.target.value)}/>
          </div>
          <div>
            <label>Height (cm)</label>
            <input value={height} onChange={(e) => setheight(e.target.value)} />
          </div>
          <button className='btn' type='submit'>submit</button>
          <button className='btn btn-outline' type='submit' onClick={reload}>Reload</button>
        </form>
        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
        <div className='img-container' >
          <img src={imgsrc} alt=''></img>
        </div>
      </div>
    </div>
  );
}

export default App;
