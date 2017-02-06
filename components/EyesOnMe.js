import React from 'react'

class EyesOnMe extends React.Component {
  constructor() {
    super()

    this.blur = this.blur.bind(this)
    this.focus = this.focus.bind(this)
  }

  focus() {
    console.log("Good!");
  }

  blur() {
    console.log("Hey! Eyes on me!");
  }

  render() {
    return (
      <div>
        <button onFocus={this.focus} onBlur={this.blur}>Submit</button>
      </div>
    )
  }
}

module.exports = EyesOnMe
