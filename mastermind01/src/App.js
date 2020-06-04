import React, { useState, useEffect, Fragment } from 'react'

export default function App() {
  return MasterMind()
}

function MasterMind() {
  const [counter, setCounter] = useState(0)
  const [guesses, setGuesses] = useState([
    { try: '', hint: '' },
    { try: '', hint: '' },
    { try: '', hint: '' },
    { try: '', hint: '' },
    { try: '', hint: '' },
    { try: '', hint: '' },
    { try: '', hint: '' },
    { try: '', hint: '' },
    { try: '', hint: '' },
    { try: '', hint: '' },
    { try: '', hint: '' },
    { try: '', hint: '' },
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
        // console.log(counter)
        // console.log(index)
        return (
          <div
            style={{
              display: 'flex',
              color: counter === index ? 'blue' : 'grey',
            }}
          >
            {
              // counter === index + 1 &&
              <div>{'Guess #' + number + ': ' + guess.try}</div>
            }
            {guess.hint.length > 0 && (
              <div style={{ marginLeft: '1rem' }}>
                {'You got ' + guess.hint + ' colors right!'}
              </div>
            )}
          </div>
        )
      })}
      <GuessInput
        key={counter}
        setValue={(value) => {
          console.log('value: ', value)
          let newGuess = [...guesses]
          newGuess[counter].try = value
          setGuesses(newGuess)
        }}
        value={guesses[counter].try}
        counter={counter}
        setCounter={setCounter}
        code={code}
      />
    </Fragment>
  )
}

const GuessInput = ({ value, setValue, counter, setCounter, code }) => {
  console.log('first guess')

  return (
    <Fragment>
      <div>Enter guess #{counter + 1} (XXXX)</div>
      <form
        onSubmit={(e) => handleGuessSubmit(e, value, setCounter, counter, code)}
      >
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

const handleGuessSubmit = (e, value, setCounter, counter, code) => {
  e.preventDefault()
  // check if length is four
  if (value.length === 4) {
    setCounter(counter + 1)
  }

  console.log('code:', code)
  // calculate hint

  return console.log('submitted', value)
}
