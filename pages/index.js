import Head from "next/head";
import Link from "next/link";
import axios from "axios";

export const getStaticProps = async () => {
  try {
    const res = await axios.get(
      "https://api.x.immutable.com/v1/assets?collection=0xacb3c6a43d15b907e8433077b6d38ae40936fe2c"
    );
    const data = await res.data.result;
    return {
      props: {
        tokens: data ,
      },
    };
  } catch (err) {
    console.log("error", err);
  }
};

export default function Home({tokens}) {
  const listOfTokens = tokens.map((token)=>{
    return(
      <div key={token.id}>
        <Link href={`tokens/${token.id}`}>
          <a>
            <img src={token.metadata.image} alt={token.name}/>
          </a>
        </Link>
      </div>
    )
  });

  return (
    <div className="w-screen">
      <Head>
        <title>List of NFT Tokens</title>
      </Head>
      <div className="flex flex-wrap">
        {listOfTokens}
      </div>
    </div>
  );
}
