import React from 'react';
import Result from '../common/Result.js';
import Editor from './Editor.js';


const Posts = ({ data, dataWorker, deleteItem, editWorker }) => {

    console.log("x", dataWorker)
    const dupa = dataWorker.map(worker => <Editor dataWorker={worker} />)




    const tasks = data.map(task => <Result
        key={task.id}
        items={task}
        deleteItem={deleteItem}
        editWorker={editWorker}
    />)


    return (<>
        <tbody>

            {tasks}

        </tbody>
        {dupa}
    </>
    );
}


export default Posts;