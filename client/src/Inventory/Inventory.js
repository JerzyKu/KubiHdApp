import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TableRow from './TableRow'
import './style.css'
import { Link } from 'react-router-dom'

export default function Inventory() {

  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3500/inventory')
      .then(res => {
        setItems(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <Link to={`/inventory/new`}> Add Item </Link> <br />
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>serialNumber</th>
            <th>createdAt</th>
            <th>owner</th>
          </tr>
        </thead>
        <tbody>
          {items.map(el => (
            <TableRow
              el={el}
              key={el._id}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}