import React, { useState, useEffect } from 'react';

const Editor = ({ items }) => {
    console.log('x', items)



    return (<table>

        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>about</th>
            </tr>
        </thead>
        <tbody>
            <tr>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>

    )
}
export default Editor