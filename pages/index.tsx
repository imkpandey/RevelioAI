import Head from "next/head";
import { NextPage } from "next";

import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RevelioAI</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,300,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-[#001220]">
        <div className="main">
          <div className="spacer layer1" />
        </div>
        <div className="flex max-w-6xl mx-auto flex-col items-center justify-center min-h-screen">
          <HeroSection />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
