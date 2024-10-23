
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Fav_manga from "./components/Fav_manga";
import Head from "next/head";
import Fav_book from "./components/Fav_book";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
       <Head>
        <title>My portfolio</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <Navbar/>
      <Hero/>
      <Fav_manga/>
      <Fav_book />
      <Footer />
    </div>
  );
}
