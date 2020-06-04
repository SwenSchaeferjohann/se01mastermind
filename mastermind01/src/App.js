import React, { useState, useEffect, Fragment } from 'react'

export default function App() {
  return MasterMind()
}

function MasterMind() {
  const [counter, setCounter] = useState(0) // tracks current guess
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
  const [winLoose, setWinLoose] = useState(null) // determines if lost or won messsage should be displayed

  var code = '4242'
  // useEffect(() => {
  //   var r1 = Math.floor(Math.random() * 6 + 1)
  //   console.log('r1: ', r1)
  //   var r2 = Math.floor(Math.random() * 6 + 1)
  //   var r3 = Math.floor(Math.random() * 6 + 1)
  //   var r4 = Math.floor(Math.random() * 6 + 1)

  //   var whole = String(r1) + String(r2) + String(r3) + String(r4)
  //   console.log('whole: ', whole)

  //   code = whole
  // }, [])
  // console.log('code: ', code)
  // console.log('guesses state', guesses)

  return (
    <Fragment>
      {winLoose === null ? (
        <Fragment>
          <div>
            Welcome to Mastermind! I created a random code for you. Let's get
            crackin'
          </div>
          {/* Render list of all states of each guess */}
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
                    {guess.try.length === 4 &&
                      'You got ' + guess.hint + ' color/s right!'}
                  </div>
                )}
              </div>
            )
          })}
          {/* render the current input field */}
          <GuessInput
            key={counter}
            setValue={(value) => {
              // console.log('value: ', value)
              let newGuess = [...guesses]
              newGuess[counter].try = value
              setGuesses(newGuess)
            }}
            value={guesses[counter].try}
            counter={counter}
            setCounter={setCounter}
            code={code}
            setHint={(hint) => {
              let newGuess = [...guesses]
              newGuess[counter].hint = hint
              setGuesses(newGuess)
            }}
            winLoose={winLoose}
            setWinLoose={setWinLoose}
          />
        </Fragment>
      ) : winLoose === true ? (
        <div> You won! refresh the page to play again.</div>
      ) : (
        <div>You lost!refresh the page to play again. </div>
      )}
    </Fragment>
  )
}

// layout of each input field
const GuessInput = ({
  value,
  setValue,
  counter,
  setCounter,
  code,
  setHint,
  winLoose,
  setWinLoose,
}) => {
  // console.log('first guess')

  return (
    <Fragment>
      <div>Enter guess #{counter + 1} (XXXX)</div>
      <form
        onSubmit={(e) =>
          handleGuessSubmit(
            e,
            value,
            setCounter,
            counter,
            code,
            setHint,
            winLoose,
            setWinLoose
          )
        }
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

// handles submission, validations, determines win or loose
const handleGuessSubmit = (
  e,
  value,
  setCounter,
  counter,
  code,
  setHint,
  winLoose,
  setWinLoose
) => {
  e.preventDefault()
  console.log('code:', code)

  // calculate hint
  var hintCount = 0
  if (value.length === 4) {
    var strArr = [...code]
    strArr.map((char, index) => {
      console.log('char: ', char, index)

      var vpos = value.charAt(index)
      console.log('vpos: ', vpos)

      if (vpos === char) {
        hintCount += 1
      }
    })

    console.log('hintCount', hintCount)
    setHint(String(hintCount))

    // check if length is four

    if (hintCount === 4) {
      // u won
      setWinLoose(true)
      console.log('u won')
    } else if (counter === 11) {
      // lost
      setWinLoose(false)
      console.log('u lost')
    } else {
      setCounter(counter + 1)
    }
  }

  return console.log('submitted', value)
}
