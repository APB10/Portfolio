import Head from "next/head";
import InfoCard from "../components/InfoCard";
import LandingPage from "../components/LandingPage";
import ParticleBackground from "../components/ParticlesBackground";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>APB Portfolio</title>
        <link rel="icon" href="favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <LandingPage />
      <ParticleBackground />
      <InfoCard />
      <Projects />
      <Footer />
    </div>
  );
}
