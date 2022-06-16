import './App.css';
import { useState } from 'react'

function App() {
	const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");

	const ops = ['/', '*', '+', '-', '.'];

	const updateCalc = value => {
		if (ops.includes(value) && calc === '') {
			return;
		}
		if (ops.includes(value) && ops.includes(calc.slice(-1))) {
			return;
		}
		
		setCalc(calc + value);

		if (!ops.includes(value)) {
			setResult(eval(calc + value).toString());
		}
	}

	const calculate = () => {
		setCalc(eval(calc).toString());
	}

	const clear = () => {
		setCalc("");
		setResult("0");
	}

	const createDigits = () => {
		const digits = [] 

		for (let i = 1; i < 10; i++) {
			digits.push(
				<button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
			)
		}
		return digits;
	}
	return (
		<div className="calculator">
			<div className="display">
				<span>({result})</span>{calc || "0"}
			</div>
			<div className="btn-board">
				<div className="digits">
					{ 
						createDigits() 
					}
					<button onClick={() => updateCalc('0')}>0</button>
					<button onClick={() => updateCalc('.')}>.</button>
				</div>
				<div className="operators">
					<button onClick={() => updateCalc('/')}>/</button>
					<button onClick={() => updateCalc('*')}>*</button>
					<button onClick={() => updateCalc('+')}>+</button>
					<button onClick={() => updateCalc('-')}>-</button>
				</div>
				<div className="clear">
					<button onClick={calculate}>=</button>
					<button onClick={clear}>CLEAR</button>
				</div>
			</div>
		</div>
	);
}

export default App;
