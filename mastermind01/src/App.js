import React, { useState, useEffect, Fragment } from 'react'

export default function App() {
  return MasterMind()
}

function MasterMind() {
  const [guesses, setGuesses] = useState([])
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

const Guess1 = () => {
  console.log('first guess')
  return (
    <Fragment>
      <div>Please enter your first guess (XXXX)</div>
      <form onSubmit={(e) => handleGuessSubmit(e)}>
        <input autoFocus></input>
        <button type='submit'>Guess!</button>
      </form>
    </Fragment>
  )
}

const handleGuessSubmit = (e) => {
  e.preventDefault()
  return console.log('submitted')
}
