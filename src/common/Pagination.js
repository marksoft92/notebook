import React from 'react';
import styles from '../styles/pagination.scss';

const Pagination = ({ dataPerPage, totalData, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i);
    }


    return (

        <nav><ul>{pageNumbers.map(number => (
            <li className={styles.lix} key={number}>
                <button><a onClick={() => paginate(number)} href="#">{number}</a></button>
            </li>
        ))}</ul></nav>
    )
}
export default Pagination