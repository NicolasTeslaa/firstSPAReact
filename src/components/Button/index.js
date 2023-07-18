import React from 'react'

export default function Button(props) {
    const {title} = props;
  return (
    <button className='btn btn-primary' >{title}</button >
  )
}
