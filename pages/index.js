'use strict'

import React from 'react'
import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import Head from '../components/head'
import Status from '../components/status'
import Timer from '../components/timer'

export default class Index extends React.Component {

  render () {
    return (
      <div>
        <Head />
        <Container fluid>
          <h1 className='mui--text-display3'>Statusoversikt</h1>
          <Row>
            <Col md='4'>
              <Timer title='Timer spart' source='https://timer.status.t-fk.win/json' />
            </Col>
            <Col md='4'>
              <Status title='Køer' source='https://queue.status.t-fk.win/json' />
            </Col>
            <Col md='4'>
              <Status title='Antall' source='https://antall.status.t-fk.win/json' />
            </Col>
          </Row>
          <Row>
            <Col md='4'>
              <Status title='vigo' source='https://vigo.saksbehandling.status.t-fk.win/json' />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
