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
            <Col md='6'>
              <Timer title='Timer spart' source='https://timer.status.t-fk.win/json' />
            </Col>
            <Col md='6'>
              <Status title='Antall' source='https://antall.status.t-fk.win/json' />
            </Col>
          </Row>
          <Row>
            <Col md='6'>
              <Status title='Køer' source='https://queue.status.t-fk.win/json' />
            </Col>
            <Col md='6'>
              <Status title='SvarUT' source='https://vigo.saksbehandling.status.t-fk.win/json' />
            </Col>
          </Row>
          <Row>
            <Col md='3'>
              <Status title='Rambo' source='https://vigo.saksbehandling.status.t-fk.win/json' />
            </Col>
            <Col md='3'>
              <Status title='MinElev' source='https://minelev.saksbehandling.status.t-fk.win/json' />
            </Col>
            <Col md='3'>
              <Status title='Skoleskyss' source='https://skoleskyss.saksbehandling.status.t-fk.win/json' />
            </Col>
            <Col md='3'>
              <Status title='Tilskudd' source='https://tilskudd.saksbehandling.status.t-fk.win/json' />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
