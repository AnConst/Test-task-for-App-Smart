import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <div>
        <Link to="/" >Home</Link>
      </div>
      <div>
        <input placeholder='Find hero' />
      </div>
    </div>
  )
}

export default Navigation
