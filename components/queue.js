'use strict'

import React from 'react'

export default class Queue extends React.Component {
  render () {
    return (
      <div>
        <ul>
          {this.props.queue.map((line) => {
            return (
              <li> {line.name}: {line.queue}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}
