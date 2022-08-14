import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import ListElement from './ListElement';

function Items({ currentItems }) {
  return (
    <div className='w-4/5 mx-auto flex justify-evenly'>
      {currentItems &&
        currentItems.map((item) => (
          <div className=''>
            {item}
          </div>
        ))}
    </div>
  );
}
 
function PaginatedItems({ tokens, itemsPerPage }) {
  const items = tokens.map((token) => {
    return (
      <div key={token.id}>
        <a>
          <ListElement token={token} />
        </a>
      </div>
    );
  });
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);
 
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
 
  return (
    <div>
      <Items className="" currentItems={currentItems} />
      <ReactPaginate
        className='flex justify-center gap-5 border'
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
 
export default PaginatedItems;