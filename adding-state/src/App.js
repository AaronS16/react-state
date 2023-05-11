import React from 'react';
import './index.css';

//Adding Things on button click

function App() {
  const [things, setThings] = React.useState(['Thing 1', "Thing 2"]),
      handleClick = () => {
        const newText = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newText])
      },
      test = things.map((thing, index) =>
        <p key={index}>{thing}</p>
      )
  // Adding and Subtracting with button click

  const [count, setCount] = React.useState(0)
  
  const add = () => {
    setCount(prevCount => prevCount + 1)
  }

  const subtract = () => {
    setCount(prevCount => prevCount - 1)
  }

  const [answer, setAnswer] = React.useState(false)

  console.log(answer)

  const outTonight = () => {
    setAnswer(prev => !prev)
  }

  return (
    <div className="">
      <button onClick={handleClick}>Add Item</button>
      {test}
      <div className='counter'>
        <button onClick={subtract} className='counter-minus'>-</button>
        <div className='counter-count'>
          <h1>{count}</h1>
        </div>
        <button onClick={add} className='counter-plus'>+</button>
      </div>
      <div className='state'>
        <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value">
                <h1 onClick={outTonight}>{answer ? 'No' : 'Yes'}</h1>
            </div>
      </div>
    </div>
  );
}

export default App;