import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'
import mainBg from '../image/main-bg.jpg'

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Create Airbnb </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/*  */}
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="py-8">
          <h2 className="py-4 text-4xl font-semibold">Expore nearby</h2>
          {/* pull data from server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item, index) => (
              <SmallCard
                key={index}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        {/* live anywhere */}
        <section>
          <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>
          <div className=" -ml-3 flex space-x-3 overflow-scroll p-3  scrollbar-hide">
            {cardsData?.map((item, index) => (
              <MediumCard key={index} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <section>
          <LargeCard
            img={mainBg}
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://jsonkeeper.com/b/3A9C').then((res) =>
    res.json()
  )
  const cardsData = await fetch('https://jsonkeeper.com/b/XNUQ').then((res) =>
    res.json()
  )
  return {
    props: {
      exploreData,
      cardsData,
    },
  }
}
