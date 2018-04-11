import React from 'react'
import PropTypes from 'prop-types'

import { BACKEND_PATH } from 'core/constants'

const Attachments = ({ attachments }) =>
  attachments.length ?
    <div>
      <p>Прикрепленные файлы</p>
      {
        attachments.map(attachment =>
          <a key={attachment.id} href={BACKEND_PATH + attachment.url}>{attachment.name} </a>
        )
      }
    </div>
  : <span />

Attachments.propTypes = {
  attachments: PropTypes.array
}

export default Attachments
