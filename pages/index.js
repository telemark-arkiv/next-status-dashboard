'use strict'

import React from 'react'
import collectData from '../lib/collect-data'
import Status from '../components/status'

export default class Index extends React.Component {
  static async getInitialProps (req) {
    const data = await collectData()
    return data
  }

  render () {
    return (
      <div>
        <h1>Statusoversikt</h1>
        <Status title="Køer" data={this.props.queue} />
        <Status title="Antall" data={this.props.antall} />
      </div>
    )
  }
}
