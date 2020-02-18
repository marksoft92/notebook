import React from 'react';
import Result from '../common/Result.js';


const Posts = (props) => {

    const tasks = props.data.map(task => <Result key={task.id} items={task} deleteItem={props.deleteItem} />)

    return (
        <tbody>

            {tasks}
        </tbody>

    );
}


export default Posts;