'use strict'

import React from 'react'

export default class Timer extends React.Component {
  render () {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          {this.props.data.map((line) => {
            return (
              <li>{line.status.toFixed(0)}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}
