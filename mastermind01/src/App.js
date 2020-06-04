import React, { useState, useEffect, Fragment } from 'react'

export default function App() {
  return MasterMind()
}

function MasterMind() {
  const [guesses, setGuesses] = useState({
    first: null,
    second: null,
    third: null,
    fourth: null,
    fifth: null,
    sixth: null,
    seventh: null,
    eighth: null,
    nineth: null,
    tenth: null,
    eleventh: null,
    twelfth: null,
  })

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
      <Guess1
        key={0}
        setValue={(v) => {
          newGuess = { ...guesses, first: v }

          newGuess.push(v)

          setGuesses()
        }}
      />
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
