import React, { useState, useEffect, Fragment } from 'react'

export default function App() {
  return MasterMind()
}

function MasterMind() {
  const [guesses, setGuesses] = useState([])
  // {
  //   key: 0
  //   value: ''
  // }
  const code = 4431

  return (
    <Fragment>
      <div>
        Welcome to Mastermind! I created a random code for you. Let's get
        crackin'
      </div>
      {guesses.map((guess, index) => (
        <div>
          Guess #{index + 1}: {guess}{' '}
        </div>
      ))}
      <Guess1 />
    </Fragment>
  )
}

const Guess1 = ({ value, setValue }) => {
  console.log('first guess')

  return (
    <Fragment>
      <div>Please enter your first guess (XXXX)</div>
      <form onSubmit={(e) => handleGuessSubmit(e, value)}>
        <input
          type='text'
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        ></input>
        <button type='submit'>Guess!</button>
      </form>
    </Fragment>
  )
}

const handleGuessSubmit = (e, value) => {
  e.preventDefault()

  return console.log('submitted', value)
}
