import { ReactElement, useState } from 'react'
import classes from './Counter.module.scss'

export function Counter (): ReactElement {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(prev => ++prev)
  }
  return (
    <>
      <h1 className={classes.h1}>{count}</h1>
      <button onClick={increment}>increment</button>
    </>
  )
}