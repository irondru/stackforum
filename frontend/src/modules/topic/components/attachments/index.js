import React from 'react'

import { BACKEND_PATH } from 'core/constants'

export default ({ attachments }) =>
  attachments.length ?
    <div>
      <br/>
      <p>Прикрепленные файлы</p>
      {
        attachments.map(attachment =>
          <a key={attachment.id} href={BACKEND_PATH + attachment.url}>{attachment.name} </a>
        )
      }
    </div>
  : <span />
