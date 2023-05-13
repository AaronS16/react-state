import React from 'react';
import './index.css';



function App() {

// Adding and Subtracting with button click

  const [count, setCount] = React.useState(0)
  
  const add = () => {
    setCount(prevCount => prevCount + 1)
  }

  const subtract = () => {
    setCount(prevCount => prevCount - 1)
  }

// Going Out Tonight

  const [answer, setAnswer] = React.useState(false)

  const outTonight = () => {
    setAnswer(prev => !prev)
  }


// Adding Things with State

const [thing, setThing] = React.useState(['Thing 1', 'Thing 2'])

const addingThing = () => {
  setThing(prev => [...prev, `Thing ${prev.length + 1}`])
}

const showThing = thing.map(el => <p key={el}>{el}</p>)

// What is being viewed on page

  return (
    <div className="">
      <div className='counter'>
        <button onClick={subtract} className='counter-minus'>-</button>
        <div className='counter-count'>
          <h1>{count}</h1>
        </div>
        <button onClick={add} className='counter-plus'>+</button>
      </div>
      <div className='state'>
        <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value" onClick={outTonight}>
                <h1>{answer ? 'Yes' : 'No'}</h1>
            </div>
      </div>
      <div>
        <button onClick={addingThing}>Add Thing</button>
        {showThing}
      </div>
    </div>
  );
}

export default App;