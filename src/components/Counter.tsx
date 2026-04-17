import React, { useState } from 'react'


const Counter = () => {
     const [count, setCount]= useState<number>(0)
     const increment = (): void => {
          setCount(count + 1);
        };
        
        const decrement = (): void => {
          if(count>0){
          setCount(count - 1);
          }
        };
  return (
    <section className='  h-[30rem] mx-auto '>
        <button className='my-6 py-2 px-3 border-2 border-blue-400 text-3xl'>{count}</button> 
        <div className=' my-4' >
        <button className='border-2 border-blue-400 py-1 px-2.5 text-2xl text-gray-500 mx-2 cursor-pointer' onClick={increment}>Increment</button>
        <button
  disabled={count === 0}
  className={`border-2 py-1 px-2.5 text-2xl mx-2 ${
    count === 0
      ? "border-blue-400 text-gray-500 cursor-not-allowed"
      : "border-blue-400 text-gray-500 cursor-pointer"
  }`}
  onClick={decrement}
>
  Decrement
</button>
        </div>
    </section>
  )
}

export default Counter
