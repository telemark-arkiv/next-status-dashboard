'use strict'

import 'isomorphic-fetch'

module.exports = async () => {
  const queueUrl = 'https://queue.status.t-fk.win/json'
  const queueRes = await fetch(queueUrl)
  const queue = await queueRes.json()
  return {
    queue: queue || []
  }
}