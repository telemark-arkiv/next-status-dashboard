'use strict'

import 'isomorphic-fetch'
import Queue from '../components/queue'

export default class Index extends React.Component {
  static async getInitialProps (req) {
    const queueUrl = 'https://queue.status.tfk.allthethings.win/?format=json'
    const queueRes = await fetch(queueUrl)
    const queue = await queueRes.json()
    return {
      queue: queue || []
    }
  }


  render () {

    return (
      <div>
      <h1>Hello, dashboard!</h1>
      <img src='/static/images/highestoffives.gif' />
      <Queue queue={this.props.queue} />
    </div>
    )
  }
}
