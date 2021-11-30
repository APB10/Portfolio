import Head from 'next/head'
import ParticleBackground from '../components/ParticlesBackground'





export default function Home() {
  return (
    <div>
      <Head>
        <title>APB Portfolio</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <ParticleBackground />
    </div>
  )
}
