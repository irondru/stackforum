import React from 'react'

export default (attachments) =>
  <div>
    attachments.map(attachment => {
      return (
        <a href={attachment.url}>{attachment.name}</a>
        
      )
    })
