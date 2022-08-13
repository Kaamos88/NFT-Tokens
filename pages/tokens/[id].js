import axios from "axios";
import Link from "next/link";
export const getStaticPaths = async () => {
  const res = await axios.get(
    "https://api.x.immutable.com/v1/assets?collection=0xacb3c6a43d15b907e8433077b6d38ae40936fe2c"
  );
  const data = await res.data.result;

  const paths = data.map((item) => {
    return {
      params: {
        id: item.token_id,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const address = "0xacb3c6a43d15b907e8433077b6d38ae40936fe2c";
  const id = context.params.id;
  const res = await axios.get(
    `https://api.x.immutable.com/v1/assets/${address}/${id}`
  );
  const data = await res.data;

  return {
    props: {
      token: data,
    },
  };
};

const Details = ({ token }) => {
  console.log(token);
  return (
    <div className="flex justify-center items-center w-[90%] mx-auto mt-36">
      <div>
        <img src={token.metadata.image} alt={token.name} />
      </div>
      <div className="text-center">
        <p>{token.metadata.name}</p>
        <p>Rarity: {token.metadata.rarity}</p>
        <p>God: {token.metadata.god}</p>
        <p>Set: {token.metadata.set}</p>
        <p>Quality: {token.metadata.quality}</p>
        <p>Proto: {token.metadata.proto}</p>
        <p>Mana: {token.metadata.mana}</p>
        <p>Type: {token.metadata.type}</p>
        <div className="w-1/2 mx-auto">
          <p>Effect: {token.metadata.effect}</p>
        </div>
        <div className="pt-10">
          <Link href="/">
            <a> GO BACK</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
