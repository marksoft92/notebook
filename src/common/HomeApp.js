import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from '../common/Posts';
import Pagination from '../common/Pagination.js';


const HomeApp = () => {
    const [data, setData] = useState([]);
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
        console.log('kliknieto guzik o id= ' + id);

    }





    return (<div><table>
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
            deleteItem={deleteItem} />
    </table>
        <Pagination dataPerPage={dataPerPage}
            totalData={data.length}
            paginate={paginate}
        />
    </div>

    )
}


export default HomeApp;