import { userAgent } from "next/server";

const ListElement = ({ token }) => {
  return (
    <div className="text-center">
      <h2>{token.name}</h2>
      <img className="mx-auto" src={token.metadata.image} alt={token.name} />
      <span>user address</span>
      <br />
      <span>{token.user}</span>
    </div>
  );
};

export default ListElement;
