import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    {id:0, value:0, name:"Ненужная вещь"},
    {id:1, value:4, name:"Ложка"},
    {id:2, value:12, name:"Вилка"},
    {id:3, value:0, name:"Тарелка"},
    {id:4, value:0, name:"Набор минималиста"}
  ]
  const [counters, setCounters] = useState(initialState)
  const handleDelete = (id) => {
    setCounters(counters.filter(count => id !== count.id))
  }
  const handleIncrement = (id) => {
    const result = counters.map((count, i) => {
      return id == i ? { ...count, value: count.value + 1} : count
    })
    setCounters(result)
  }
  const handleDecrement = (id) => {
      const result = counters.map((count, i) => {
        return id == i && count.value > 0 ? { ...count, value: count.value - 1} : count
      })
    setCounters(result)
  }
  const handleReset = () => {
    setCounters(initialState)
  }
  return (
    <>
      <h1>CounterList</h1>
      {counters.map(count => {
        return (
          <Counter 
            key={count.id} 
            onDelete={handleDelete}
            onIcrement={handleIncrement}
            onDecrement={handleDecrement}
            {...count}>
          </Counter>
        )
      })}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
    </>
  )
}

export default CountersList