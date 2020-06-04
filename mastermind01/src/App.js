import React, { useState, useEffect, Fragment } from 'react'

export default function App() {
  return MasterMind()
}

function MasterMind() {
  const [counter, setCounter] = useState(0)
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
      {guesses.map((guess, index) => {
        let number = index + 1
        console.log(counter)
        console.log(index)
        return (
          <div style={{ color: counter === index ? 'blue' : 'grey' }}>
            {
              // counter === index + 1 &&
              'Guess #' + number + ': ' + guess
            }
          </div>
        )
      })}
      <GuessInput
        key={counter}
        setValue={(value) => {
          console.log('value: ', value)
          let newGuess = [...guesses]
          newGuess[counter] = value
          setGuesses(newGuess)
        }}
        value={guesses[counter]}
        counter={counter}
        setCounter={setCounter}
      />
    </Fragment>
  )
}

const GuessInput = ({ value, setValue, counter, setCounter }) => {
  console.log('first guess')

  return (
    <Fragment>
      <div>Enter guess #{counter + 1} (XXXX)</div>
      <form onSubmit={(e) => handleGuessSubmit(e, value, setCounter, counter)}>
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

const handleGuessSubmit = (e, value, setCounter, counter) => {
  e.preventDefault()
  // check if length is four
  setCounter(counter + 1)
  return console.log('submitted', value)
}
