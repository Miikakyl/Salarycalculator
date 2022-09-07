import App from "./App"
import React, {useState} from "react"
import './calculator.css'

const Calculator = () => {

    const [salary,setSalary] = useState(0)
    const [tax,setTax] = useState(0)
    const [pension,setPension] = useState(0.25)
    const [insurance,setInsurance] = useState(0.25)
    const [result,setResult] = useState()

    const selectValues = [0.25,0.50,0.75,1.00,1.25,1.50,1.75,2.00,2.25,2.50,2.75,3.00,3.25,3.50,3.75,4.00,4.25,4.50,4.75,5.00]

    const calculateNet = (e) => {
        e.preventDefault()
        
        if(salary > 0){
            let taxCut = salary * (tax / 100)
            let pensionCut = salary * (pension / 100)
            let insuranceCut = salary * (insurance / 100)

            setResult(salary - (taxCut + pensionCut + insuranceCut).toFixed(2))
        }
    }

    return (
        <div className="calculator">
            <h2>Loan calculator</h2>
            <form onSubmit={calculateNet}>
                <div>
                    <label>Salary</label>
                    <input type="number" value={salary} onChange={e => setSalary(e.target.value)}></input>
                </div>

                <div>
                    <label>Tax (%)</label>
                    <p className="euro">{(salary * (tax / 100)).toFixed(2)}€</p>

                    <input type="number" value={tax} onChange={e => setTax(e.target.value)}></input>
                </div>

                <div>
                    <label>Pension (%)</label>
                    <p className="euro">{(salary * (pension / 100)).toFixed(2)}€</p>
                    <select value={pension} onChange={e => setPension(e.target.value)}>
                        {selectValues.map(value => {
                            return(
                                <>
                                    <option value={value}>{value} %</option>
                                </>
                            )
                        })}
                    </select>
                </div>

                <div>
                    <label>Insurance (%)</label>
                    <p className="euro">{(salary * (insurance / 100)).toFixed(2)}€</p>
                    <select value={insurance} onChange={e => setInsurance(e.target.value)}>
                        {selectValues.map(value => {
                                return(
                                    <>
                                        <option value={value}>{value} %</option>
                                    </>
                                )
                            })}
                    </select>
                </div>

                <label>Your salary after payments</label>
                <output>{result}</output>
                <button className="btn-primary">Calculate</button>
            </form>
        </div>
    )
}
export default Calculator