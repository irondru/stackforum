import _ from 'underscore';
import fetch from 'isomorphic-fetch'

const getCSRFToken = () =>
  _.find(document.getElementsByTagName('meta'), meta => meta.name === 'csrf-token').content

export const get = url => fetch(url, {credentials: 'same-origin'})

export const post = (url, params) =>
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': this.getCSRFToken(),
    },
    credentials: 'same-origin'
  })

export const patch = (url, params) =>
  fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': this.getCSRFToken(),
    },
    credentials: 'same-origin'
    })
