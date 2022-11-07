import './App.css';
import {useState} from "react";

function App() {
const [calculation, setCalculation]=useState('')
    const [output, setOutput] = useState('')
    const actions = ['+', '-', '*', '/', '.']
    const updateCalculation=value=>{

    if(
        actions.includes(value) & calculation === '' ||
        actions.includes(value) & actions.includes(calculation.slice(-1),0)
    ){
        return value
    }
    setCalculation(calculation+value)

        if (!actions.includes(value)){
            setOutput(eval(calculation+value).toString())
        }

    }
   const createDigits =()=>{
       const digits=[]

       for (let i=0;i<10; i++){
           digits.push(
               <button onClick={()=>updateCalculation(i.toString())} key={i}>{i}</button>
           )
       }
       return digits
   }
const calculate=()=>{
    setCalculation(eval(calculation).toString())
}
const ansCalculate =()=>{
    setCalculation(eval(output).toString())
}
const deleteC=()=>{
      

        const value=calculation.slice(0,-1)
        setCalculation(value)
        
}
const clearC=()=>{
  setCalculation('')
  setOutput('')
}

  return (
      <div>

      <div className="calc-grid">
      
        <div className='output'>
          {calculation||'0'}
          <span>{output}</span>
          

        </div>

      <div>
        <div className='ops'>

          <button onClick={()=>{updateCalculation('+')}} >+</button>
          <button onClick={()=>{updateCalculation('-')}}>-</button>
          <button onClick={()=>{updateCalculation('*')}}>*</button>
          <button onClick={()=>{updateCalculation('/')}}>/</button>
          <button onClick={ansCalculate}>ANS</button>

          <button onClick={clearC}>AC</button>
          <button onClick={deleteC}>DEL</button>
        </div>
        <div className='dig'>

            {createDigits()}

        <button onClick={()=>{updateCalculation('.')}}>.</button>
        
        <button onClick={calculate}>=</button>
    </div>
    </div>


    </div>
</div>
  );
}

export default App;
