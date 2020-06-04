import React, { useState, useEffect, Fragment } from 'react'

export default function App() {
  return MasterMind()
}

function MasterMind() {
  const [guesses, setGuesses] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ])

  const code = 4431
  console.log('guesses state', guesses)
  return (
    <Fragment>
      <div>
        Welcome to Mastermind! I created a random code for you. Let's get
        crackin'
      </div>
      {guesses.map((guess, index) => (
        <div>{guess.length === 4 && 'Guess #' + index + 1 + ': ' + guess}</div>
      ))}

      {
        <GuessInput
          key={0}
          setValue={(value) => {
            console.log('value: ', value)

            let newGuess = [...guesses]
            newGuess[0] = value
            setGuesses(newGuess)
          }}
          value={guesses[0]}
        />
      }
    </Fragment>
  )
}

const GuessInput = ({ value, setValue }) => {
  console.log('first guess')

  return (
    <Fragment>
      <div>Please enter your first guess (XXXX)</div>
      <form onSubmit={(e) => handleGuessSubmit(e, value)}>
        <input
          type='text'
          onChange={(e) => setValue(e.target.value)}
          value={value}
          autoFocus
        ></input>
        <button type='submit'>Guess!</button>
      </form>
    </Fragment>
  )
}

const handleGuessSubmit = (e, value) => {
  e.preventDefault()
  // check if length is four

  return console.log('submitted', value)
}
