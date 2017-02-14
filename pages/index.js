'use strict'

const urls = require('../config/urls')
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
          <h1 className='mui--text-title'>Digitalisering</h1>
          <Row>
            <Col md='6'>
              <Timer title='Timer spart' source='https://timer.status.t-fk.win/json' refresh='10' />
            </Col>
            <Col md='6'>
              <Status title='Antall' source='https://antall.status.t-fk.win/json' refresh='10' />
            </Col>
          </Row>
          <Row>
            <Col md='6'>
              <Status title='Køer' source='https://queue.status.t-fk.win/json' refresh='10' />
            </Col>
            <Col md='6'>
              <Status title='SvarUt' source={urls.svarUt} refresh='10' />
            </Col>
          </Row>
          <Row>
            <Col md='3'>
              <Status title='Rambo' source={urls.saksbehandlingVigo} refresh='10' />
            </Col>
            <Col md='3'>
              <Status title='MinElev' source={urls.saksbehandlingMinelev} refresh='10' />
            </Col>
            <Col md='3'>
              <Status title='Skoleskyss' source={urls.saksbehandlingSkoleskyss} refresh='10' />
            </Col>
            <Col md='3'>
              <Status title='Tilskudd' source={urls.saksbehandlingTilskudd} refresh='10' />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
