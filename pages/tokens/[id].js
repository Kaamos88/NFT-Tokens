import axios from "axios";

export const getStaticPaths = async () => {
  const res = await axios.get(
    "https://api.x.immutable.com/v1/assets?collection=0xacb3c6a43d15b907e8433077b6d38ae40936fe2c"
  );
  const data = await res.data.result;

  const paths = data.map((item) => {
    return {
      params: {
        id: item.token_id,
        address: item.token_address,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const address = '0xacb3c6a43d15b907e8433077b6d38ae40936fe2c';
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

const Details = (token) => {
  console.log(token);
  return (
    <div>
      <img src={token.token.metadata.image} alt={token.name} />
    </div>
  );
};

export default Details;
