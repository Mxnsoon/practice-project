import { useState } from 'react'
import css from './Counter.module.scss'

export const Counter = () => {
	const [count, setCount] = useState(0)
	const increment = () => {
		setCount(count + 1)
	}
	return (
		<div className={css.button}>
			<button onClick={increment}>You clicked me {count} times</button>
		</div>
	)
}
