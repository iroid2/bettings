import React from 'react'

export default function Buttons({name,color,border}) {
  return (
    <button className={color}>{name}</button>
  )
}
