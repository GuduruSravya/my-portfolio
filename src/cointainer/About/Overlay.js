import React from 'react'
import PropTypes from 'prop-types'
import './overlay.css'

const Overlay = ({children,close}) => {
  return (
    <div className="overlay" onClick={close}>{children}</div>
  )
}



export default Overlay