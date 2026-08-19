import { Raleway } from "next/font/google";
import "../styles/variables.scss";
import Navbar from "@/app/components/Navbar/Navbar";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={raleway.className}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
