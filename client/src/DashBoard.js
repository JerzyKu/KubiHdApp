import React, { useState } from 'react'

export default function DashBoard() {

    const [number, setNumber] = useState(7)

  return (
    <div>DashBoard  {number}</div>
  )
}
