'use strict'

import 'isomorphic-fetch'

module.exports = async () => {
  const antallRes = await fetch('https://antall.status.t-fk.win/json')
  const queueRes = await fetch('https://queue.status.t-fk.win/json')
  const timerRes = await fetch('https://timer.status.t-fk.win/json')
  const antall = await antallRes.json()
  const timer = await timerRes.json()
  const queue = await queueRes.json()
  return {
    antall: antall || [],
    queue: queue || [],
    timer: timer || []
  }
}