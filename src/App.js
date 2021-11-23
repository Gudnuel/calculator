import { useState } from "react";
import './App.css';
import  Input from './components/Input';
import Button from './components/Button';
import * as math from "mathjs";


const App = () => {
  const [text, setText] = useState(" ")
  const [result, setResult] = useState(" ")
 
  const addText=(value) => {
    setText(text.concat(value));
      if (text.length === 18) {
        setResult("Max input reached");
      };
      if (text.length === 21) {
        restInput() 
      }
  }; 

  const calculateInput = () =>{
    //  setResult(math.evaluate(text))
    const calc = () =>{
      math.evaluate(text)
    }
  try {

    calc()

  } catch (error) {

   return setResult("error") &&
          setText("Wrong Syntax ")

  }
  const jump = parseFloat(math.evaluate(text).toFixed(8));
  
      setResult(jump)
          if ( jump === Infinity ){
          return setResult("NAN")
           } 
           if (result.length >= 15){
            setResult('result > value');
          }              
  };
 
  function backSpace() {
    setText(text.slice(0,-1));

  };

    const restInput = () =>{
    setResult("");
    setText("");
  };

  const buttonColor='#f2a33c'
  return (

     <div className="house" >
        <div className='cover'>
        <div className="calculate"> 
          <h3>Calculator</h3>
          </div>
        <div className='row'> 
          <Input  text={text} result={result}/>
        </div>
        <div className='row'>
          <Button symbol='7' handleChange={addText}/>
          <Button symbol='8' handleChange={addText}/>
          <Button symbol='9' handleChange={addText}/>
          <Button symbol='/' handleChange={addText} color={buttonColor}/>
        </div>
        <div className='row'>
          <Button symbol='4' handleChange={addText}/>
          <Button symbol='5' handleChange={addText}/>
          <Button symbol='6' handleChange={addText}/>
          <Button symbol='*' handleChange={addText} color={buttonColor}/>
        </div>
        <div className='row'>
          <Button symbol='1' handleChange={addText}/>
          <Button symbol='2'handleChange={addText}/>
          <Button symbol='3'handleChange={addText}/>
          <Button symbol='+' handleChange={addText} color={buttonColor}/>
        </div>
        <div className='row'>
          <Button symbol='0' handleChange={addText}/>
          <Button symbol='.' handleChange={addText}/>
          <Button symbol='=' handleChange={calculateInput}/>
          <Button symbol='-' handleChange={addText} color={buttonColor}/>
        </div>
        <div className='row'>
           <Button symbol='clear' handleChange={restInput}/>
           <Button symbol='C' handleChange={backSpace}/>
        </div>
        </div>
      </div>

  );
}

export default App;
