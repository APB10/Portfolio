import Head from "next/head";
import InfoCard from "../components/InfoCard";
import LandingPage from "../components/LandingPage";
import ParticleBackground from "../components/ParticlesBackground";

export default function Home() {
  return (
    <div>
      <Head>
        <title>APB Portfolio</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <LandingPage />
      <ParticleBackground />
      <InfoCard />
    </div>
  );
}
