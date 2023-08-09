import React from 'react'

const PageL = ({ link, itemClass }) => {
    const { id,href, text } = link;
  return (
      <li key={id}>
            <a href={href}className={itemClass}>
              {text}
            </a>
          </li>
  )
}

export default PageL
