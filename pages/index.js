'use strict'

import React from 'react'
import Status from '../components/status'
import Timer from '../components/timer'

export default class Index extends React.Component {

  render () {
    return (
      <div>
        <h1>Statusoversikt</h1>
        <Timer title='Timer spart' source='https://timer.status.t-fk.win/json' />
        <Status title='Køer' source='https://queue.status.t-fk.win/json' />
        <Status title='Antall' source='https://antall.status.t-fk.win/json' />
        <Status title='vigo' source='https://vigo.saksbehandling.status.t-fk.win/json' />
      </div>
    )
  }
}
