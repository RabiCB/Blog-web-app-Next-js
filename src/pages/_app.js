import "@/styles/globals.css";
import Navbar from "Components/Navbar";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <h1>footer</h1>
    </>
  );
}
