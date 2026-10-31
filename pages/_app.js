import { Raleway } from "next/font/google";
import Head from "next/head";
import "../styles/variables.scss";
import Navbar from "@/app/components/Navbar/Navbar";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <main className={raleway.className}>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
