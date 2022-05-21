import React from 'react'

function ChildProps(props) {
  return (
    <div> 
        {props.value}
        {props.children}
    </div>
  )
}

export default ChildProps