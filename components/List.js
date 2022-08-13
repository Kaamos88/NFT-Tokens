import ListElement from "./ListElement";
import Link from "next/link";

const List = ({ tokens }) => {
  const listOfTokens = tokens.map((token) => {
    return (
      <Link key={token.id} href={`tokens/${token.id}`}>
        <a>
          <ListElement token={token} />
        </a>
      </Link>
    );
  });
  return (
    <div>
      <div className="flex flex-wrap gap-5 justify-evenly w-4/5 mx-auto mt-5">
        {listOfTokens}
      </div>
    </div>
  );
};

export default List;
