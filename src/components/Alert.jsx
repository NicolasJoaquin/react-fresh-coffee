import React from 'react'

const Alert = ({children, type}) => {
    const classType = type === 'error' ? 'bg-red-100 border-red-500 text-red-700' : 'bg-green-100 border-green-500 text-green-700'
  return (
    <div className={`${classType} border-l-4 p-4 my-2 rounded-sm`} role="alert">
        <p>{children}</p>
    </div>
  )
}

export default Alert