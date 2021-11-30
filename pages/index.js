import Head from 'next/head'
import Header from '../components/Header'
import ParticleBackground from '../components/ParticlesBackground'

export default function Home() {
  return (
    <div>
      <Head>
        <title>APB Portfolio</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header />
      <ParticleBackground />
    </div>
  )
}
