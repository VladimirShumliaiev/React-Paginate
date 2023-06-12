import React, {useEffect, useState} from 'react';
import style from './Users.module.css'
import ReactPaginate from "react-paginate";

const Users = (props) => {
    const {data} = props
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 1

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div>
                {currentItems.map(user => {
                    return (
                        <div key={user.id}>
                            <div>
                                {user.name}
                            </div>
                            <div>
                                {user.username}
                            </div>
                            <hr/>
                        </div>
                    )
                })}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName={style.Pagination}
                pageLinkClassName={style.pageNum}
                previousLinkClassName={style.pageNum}
                nextLinkClassName={style.pageNum}
                activeLinkClassName={style.active}
            />
        </>
    );
};

export default Users;