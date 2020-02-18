import React from 'react';

const Pagination = ({ dataPerPage, totalData, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i);
    }


    return (

        <nav><ul>{pageNumbers.map(number => (
            <div key={number}>
                <button><a onClick={() => paginate(number)} href="#">{number}</a></button>
            </div>
        ))}</ul></nav>
    )
}
export default Pagination