'use strict'

import React from 'react'

export default class Status extends React.Component {
  render () {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          {this.props.data.map((line) => {
            return (
              <li>{line.name}: {line.status}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}
