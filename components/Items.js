const Items = ({ currentItems }) => {
  return (
    <div className="w-4/5 mx-auto h-4/5 flex flex-col lg:flex-row justify-evenly gap-5">
      {currentItems &&
        currentItems.map((item) => <div className="h-full">{item}</div>)}
    </div>
  );
};

export default Items;
