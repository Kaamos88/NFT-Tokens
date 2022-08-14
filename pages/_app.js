import "../styles/globals.css";
import PaginatedItems from "../components/PaginateItems";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
