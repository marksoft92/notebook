import React from 'react';

const Delete = (props) => {
    const { id } = props.id;

    return (
        <button onClick={() => props.deleteItem(id)}>Usuń</button>
    )
}
export default Delete