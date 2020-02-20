import React, { useState, useEffect } from 'react';

const Editor = (props) => {
    console.log('x', props.dataWorker.id)

    const { name, company, email, phone, address, about } = props.dataWorker


    return (

        <><tbody>
            <tr>

                <th>Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>about</th>
            </tr>


            <tr>


                <td>{name}</td>
                <td>{company}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{address}</td>
                <td>{about}</td>
            </tr>
        </tbody>
        </>

    )
}
export default Editor