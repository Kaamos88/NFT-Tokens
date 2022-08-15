const Items = ({ currentItems }) => {
  return (
    <div id="tokens" className="p-3 h-full sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
      {currentItems && currentItems.map((item) => <>{item}</>)}
    </div>
  );
};

export default Items;
