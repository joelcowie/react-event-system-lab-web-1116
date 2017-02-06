import React from 'react'

class Keypad extends React.Component {
  constructor() {
    super()

    this.key = this.key.bind(this)
  }

  key() {
    console.log("Entering password...");
  }

  render () {
    return (
      <div>
      <input type='password' onKeyUp={this.key}>Enter your password</input>
      </div>
    )
  }
}


module.exports = Keypad
