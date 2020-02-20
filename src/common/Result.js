import React from 'react';
import Edit from '../common/Edit.js';
import Delete from '../common/Delete.js';
const Result = (props) => {



    const { avatarUrl, name, company } = props.items;


    return (
        <>
            <tr>
                <td>
                    <img src={avatarUrl}>
                    </img>
                </td>
                <td>
                    {name}
                </td>
                <td>
                    {company}
                </td>
                <td>
                    <Delete
                        id={props.items}
                        deleteItem={props.deleteItem} />
                    <Edit
                        dataWorker={props.items}
                        editWorker={props.editWorker}
                        worker={props.dataWorker} />
                </td>
            </tr>
        </>
    );
}
export default Result;