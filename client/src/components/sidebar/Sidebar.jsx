import React from 'react'
import './styles.scss'

function Sidebar({options}) {
  return (
    <div className='sidebar'>
      {
        options.map(item => (
          <li key={item}>
            {item}
          </li>
        ))
      }
    </div>
  )
}

Sidebar.defaultProps = {
  options: [
    'Main',
    'Form'
  ]
}

export default Sidebar