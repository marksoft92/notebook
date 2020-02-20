import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from '../common/Posts';
import Pagination from '../common/Pagination.js';
import { NavLink, Link, Route } from 'react-router-dom';
import AddWorker from './AddWorker';

const HomeApp = () => {
    const [data, setData] = useState([]);
    const [worker, setWorker] = useState();
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(20);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get('data.json')
            setData(res.data);
            setLoading(false);
        }
        fetchData();
    }, []);




    const indexOfLastPost = currentPage * dataPerPage;
    const indexOfFirstPost = indexOfLastPost - dataPerPage;
    const currentData = data.slice(indexOfFirstPost, indexOfLastPost);


    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const deleteItem = (id) => {
        const workers = [...data];
        let newWorkers = workers.filter(worker => worker.id !== id)
        setData(newWorkers)

    }

    const editWorker = (id) => {
        const workers = [...data];
        let newWorker = workers.filter(worker => worker.id == id)
        setWorker(newWorker)
    }


    const addWorker = () => {

    }

    return (<div>

        <Link state={addWorker} to={"/add"}><button>Add new worker</button></Link>
        <table>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>company</th>
                    <th>action button</th>
                </tr>
            </thead>
            <Posts data={currentData}
                loading={loading}
                deleteItem={deleteItem}
                editWorker={editWorker}
                dataWorker={worker} />
        </table>
        <Pagination dataPerPage={dataPerPage}
            totalData={data.length}
            paginate={paginate}

        />

    </div>

    )
}


export default HomeApp;