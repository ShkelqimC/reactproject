import React from 'react';

const Pagination = ({ gotoPrevPage, gotoNextPage }) => {
    return (
        <div>
            {gotoPrevPage && <button onClick={gotoPrevPage}>Previous page</button>}
            {gotoNextPage && <button onClick={gotoNextPage} >Next page</button>}

        </div>
    );
}

export default Pagination;
