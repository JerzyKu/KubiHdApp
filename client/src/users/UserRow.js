import React from 'react'

export default function UserRow({ name, surname }) {
    return (
        <tbody>
            <tr>
                <td>
                    {name}
                </td>
                <td>
                    {surname}
                </td>
            </tr>
        </tbody>
    )
}
