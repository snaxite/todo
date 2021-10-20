import { useState } from "react"


export default function Index(): any {
    const [data, setData] = useState({
        firstNumber: '',
        secondNumber: '',
        operand: '',
        end: false,
        result: 0,
    })

    function handleClick(e: any): void {
        const value = e.target.value;
        if (value === "=") {
            switch (data.operand) {
                case "+":
                    setData({ ...data, result: parseInt(data.firstNumber) + parseInt(data.secondNumber), end: true })
                    break;
                case "-":
                    setData({ ...data, result: parseInt(data.firstNumber) - parseInt(data.secondNumber), end: true })
                    break;
                case "*":
                    setData({ ...data, result: parseInt(data.firstNumber) * parseInt(data.secondNumber), end: true })
                    break;
                case "/":
                    setData({ ...data, result: parseInt(data.firstNumber) / parseInt(data.secondNumber), end: true })
                    break;
                default:
                    break;
            }

        } else if (value === 'c') {
            setData({ firstNumber: '', secondNumber: '', operand: '', result: 0, end: false })
        } else if (data.firstNumber.length > 0 && (value === "+" || value === "-" || value === "*" || value === "/")) {
            setData({ ...data, operand: value })
        } else if (!data.operand) {
            setData({ ...data, firstNumber: data.firstNumber + e.target.value })
        } else {
            setData({ ...data, secondNumber: data.secondNumber + e.target.value })
        }
    }
    return (
        <div className="flex flex-row justify-center">
            <div className="absolute border-2 w-1/4 h-auto mt-12 rounded-lg bg-gray-100 shadow-md">
                <div className="border my-3 mx-4 h-16 bg-blue-200 rounded-lg">
                    <span className="text-2xl block overflow-hidden mt-3 mx-3">
                        {data.firstNumber}&nbsp;{data.operand}&nbsp;{data.secondNumber}
                        {data.end && `  =  ${data.result}`}
                    </span>
                </div>
                <div className="flex flex-row justify-around flex-wrap h-full">
                    <div className="flex flex-col justify-around">
                        <button value="+" type="button" className="bg-red-400 btn hover:bg-red-600 my-4" onClick={handleClick}>+</button>
                        <button value="-" type="button" className="bg-red-400 btn hover:bg-red-600 my-4" onClick={handleClick}>-</button>
                        <button value="*" type="button" className="bg-red-400 btn hover:bg-red-600 my-4" onClick={handleClick}>&#215;</button>
                        <button value="/" type="button" className="bg-red-400 btn hover:bg-red-600 my-4" onClick={handleClick}>&#247;</button>
                    </div>
                    <div className="flex flex-col justify-around">
                        <button value="1" type="button" className="btn bg-indigo-300 hover:bg-indigo-500" onClick={handleClick}>1</button>
                        <button value="4" type="button" className="btn bg-indigo-300 hover:bg-indigo-500" onClick={handleClick}>4</button>
                        <button value="7" type="button" className="btn bg-indigo-300 hover:bg-indigo-500" onClick={handleClick}>7</button>
                        <button value="c" type="button" className="btn bg-indigo-300 hover:bg-indigo-500" onClick={handleClick}>C</button>
                    </div>
                    <div className="flex flex-col justify-around">
                        <button value="2" type="button" className="btn bg-indigo-300 hover:bg-indigo-500" onClick={handleClick}>2</button>
                        <button value="5" type="button" className="btn bg-indigo-300 hover:bg-indigo-500" onClick={handleClick}>5</button>
                        <button value="8" type="button" className="btn bg-indigo-300 hover:bg-indigo-500" onClick={handleClick}>8</button>
                        <button value="0" type="button" className="btn bg-indigo-300 hover:bg-indigo-500" onClick={handleClick}>0</button>
                    </div>
                    <div className="flex flex-col justify-around">
                        <button value="3" type="button" className="btn bg-indigo-300 hover:bg-indigo-500" onClick={handleClick}>3</button>
                        <button value="6" type="button" className="btn bg-indigo-300 hover:bg-indigo-500" onClick={handleClick}>6</button>
                        <button value="9" type="button" className="btn bg-indigo-300 hover:bg-indigo-500" onClick={handleClick}>9</button>
                        <button value="=" type="button" className="btn bg-green-300 hover:bg-green-500" onClick={handleClick}>=</button>
                    </div>
                </div>
            </div>
        </div>
    )
}