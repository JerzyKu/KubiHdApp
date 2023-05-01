import React from 'react'

export default function UserRow({ name, surname }) {
    return (
        <tr>
            <td>
                {name}
            </td>
            <td>
                {surname}
            </td>
        </tr>
    )
}
