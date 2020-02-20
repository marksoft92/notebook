import React from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
const Edit = (props) => {

    const { id } = props.dataWorker

    return (
        <button onClick={() => props.editWorker(id)}>Edit</button>

    )
}

export default Edit;