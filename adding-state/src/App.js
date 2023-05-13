import React from 'react';
import empty_star from './images/star-empty.png';
import filled_star from './images/star-filled.png';
import user_img from './images/user.png';
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

// Contact Card Object

const [contact, setContact] = React.useState({
  firstName: "John",
  lastName: "Doe",
  phone: "+1 (719) 555-1212",
  email: "itsmyrealname@example.com",
  isFavorite: false
})

let starIcon = contact.isFavorite ? filled_star : empty_star

function toggleFavorite() {
  setContact(prevState => prevState.contact.isFavorite = !prevState.contact.isFavorite)
}

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
      <main>
        <article className="card">
                  <img src={user_img} className="card--image" />
                  <div className="card--info">
                      <img 
                          src={starIcon} 
                          className="card--favorite"
                          onClick={toggleFavorite}
                      />
                      <h2 className="card--name">
                          {contact.firstName} {contact.lastName}
                      </h2>
                      <p className="card--contact">{contact.phone}</p>
                      <p className="card--contact">{contact.email}</p>
                  </div>
        </article>
      </main>
    </div>
  );
}

export default App;