import React, {useEffect, useState} from 'react';
import ReactPaginate from "react-paginate";
import style from './Pagination.module.css'

const Pagination = (props) => {
    const {data} = props
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 3

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % data.length;
        setItemOffset(newOffset);
    }
    return (
        <div>
            <div>
                {currentItems.map(image => {
                    return (
                        <div key={image.id}>
                            <img src={image.url} alt=""/>
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
                pageClassName={style.pageNum}
                previousLinkClassName={style.pageNum}
                nextLinkClassName={style.pageNum}
                activeLinkClassName={style.active}
            />
        </div>
    );
};

export default Pagination;