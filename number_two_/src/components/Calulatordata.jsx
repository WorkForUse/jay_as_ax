import { useState } from 'react';
import '../components/Calculator.css';
import Datatransfer from './Datatransfer';

const Calulatordata = () => {
    const [calculate, setCalculate] = useState('');

    const calculatorbtn = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "/", "*", "%", "C", "="];

    const handleClick = (value) => {
        if (value === "C") {
            setCalculate('');
        } else if (value === "=") {
            try {
                
                const result = eval(calculate);
                setCalculate(result.toString());
            } catch (error) {
                setCalculate('Error');
            }
        } else {
            setCalculate(prev => prev + value);
        }
    };

    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <input type="text" placeholder='JSX CALCULATOR' value={calculate} readOnly />
                <ul className="list-group list-group-flush adjustment">
                    {calculatorbtn.map((valuedata, index) => (
                        <Datatransfer key={index} Propdata={valuedata} calculateButton={handleClick} />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Calulatordata;
