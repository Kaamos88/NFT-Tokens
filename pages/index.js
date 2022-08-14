import Head from "next/head";
import axios from "axios";
import PaginatedItems from "../components/PaginateItems";

export const getStaticProps = async () => {
  try {
    const res = await axios.get(
      "https://api.x.immutable.com/v1/assets?collection=0xacb3c6a43d15b907e8433077b6d38ae40936fe2c"
    );
    const data = await res.data.result;
    return {
      props: {
        tokens: data,
      },
    };
  } catch (err) {
    console.log("error", err);
  }
};

export default function Home({ tokens }) {
  return (
    <div className="md:flex md:justify-center md:items-center bg-slate-300 lg:h-screen w-screen">
      <Head>
        <title>List of NFT Tokens</title>
      </Head>
      <div className="bg-slate-400 2xl:w-4/6 lg:w-[95vw] md:rounded-3xl md:border-4 custom border-slate-200 2xl:h-[95%]">
        <PaginatedItems tokens={tokens} itemsPerPage={10} />
      </div>
    </div>
  );
}
