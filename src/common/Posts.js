import React from 'react';
import Result from '../common/Result.js';
import Editor from './Editor.js';


const Posts = ({ data, dataWorker, deleteItem, editWorker }) => {

    if (dataWorker != undefined) {
        dataWorker.map(worker => <Editor items={worker} />)
    }


    const tasks = data.map(task => <Result
        key={task.id}
        items={task}
        deleteItem={deleteItem}
        editWorker={editWorker} />)



    return (
        <tbody>

            {tasks}
        </tbody>

    );
}


export default Posts;