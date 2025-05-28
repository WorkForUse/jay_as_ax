import { useState } from 'react'
import './cl.css'
import TransferFile from './TransferFile'
const CalculateData = () => {

    const clbtn = [
        "%","©","/","*","-","+","=",
        "1","2","3","4","5","6","7","8","9","0"
    ]

    const [calculation,setCalculation] = useState("")

    const calculateFunc = (value) => {
        if(value === "©"){
            setCalculation('');
        }else if(value === "="){
            try {
                const result = eval(calculation)
                setCalculation(result.toString())
            } catch (error) {
                setCalculation('Error')
            }
        } else {
            setCalculation((preview)=>{ return preview + value})
        }
    }

  return (
    <>
        <div className="Container">
            <input type="text" readOnly value={calculation} style={{ width: '100%', padding: '10px', border: '5px solid navy' }} />


            {clbtn.map((value, index) => (
            <TransferFile key={index} cButton = {value} handleLogic={calculateFunc}/>
            ))}
    </div>
    </>
  )
}

export default CalculateData