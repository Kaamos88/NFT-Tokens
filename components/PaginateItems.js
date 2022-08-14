import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Item from "./Item";
import Items from "./Items";

const PaginatedItems = ({ tokens, itemsPerPage }) => {
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

  const items = tokens.map((token) => {
    return (
      <div className="h-full" key={token.id}>
        <a>
          <Item token={token} />
        </a>
      </div>
    );
  });

  return (
    <div className="flex flex-col justify-center items-center h-full gap-5" >
      <Items currentItems={currentItems} />
        <ReactPaginate
          className="flex justify-center w-full text-center"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          breakClassName="border border-slate-600 bg-slate-300 hover:bg-slate-400 w-12"
          pageClassName=" border border-slate-600 bg-slate-300 hover:bg-slate-400 w-12"
          previousClassName="border border-slate-600 bg-slate-300 hover:bg-slate-400 w-12 rounded-l-xl" 
          nextClassName="border border-slate-600 bg-slate-300 hover:bg-slate-400 w-12 rounded-r-xl"
          activeClassName="bg-blue-700 hover:bg-blue-800 text-white"
        />
      
    </div>
  );
};

export default PaginatedItems;
