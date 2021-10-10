import React from 'react'

function Button(props) {
  return (
    <>
      <div className="button">
        <button>{props.item}</button>
      </div>
    </>
  )
}

export default Button
