import React from 'react';
import Edit from '../common/Edit.js';
import Delete from '../common/Delete.js';
const Result = (props) => {



    const { avatarUrl, name, company, id } = props.items;


    return (
        <>
            <tr><td><img src={avatarUrl}></img></td> <td> {name}</td> <td>{company}</td><td><Delete id={props.items} deleteItem={props.deleteItem} /></td></tr>
        </>
    );
}
export default Result;