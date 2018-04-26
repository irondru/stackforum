import React from 'react'
import PropTypes from 'prop-types'

const AttachmentsList = ({ attachments }) =>
  attachments.length ?
    <div>
      <p>Прикрепленные файлы</p>
      {
        attachments.map(attachment =>
          <a key={attachment.id} href={process.env.REACT_APP_BACK_ROOT + attachment.url}>{attachment.name} </a>
        )
      }
    </div>
  : <span />

AttachmentsList.propTypes = {
  attachments: PropTypes.array
}

export default AttachmentsList
