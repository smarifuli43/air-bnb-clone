import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard'
import Map from '../components/Map'

const Search = ({ searchResults }) => {
  const router = useRouter()
  const { location, startDate, endDate, noOfGuests } = router.query
  const formattedStartedDate = format(new Date(startDate), 'dd MMM yy')
  const formattedEnddDate = format(new Date(endDate), 'dd MMM yy')
  const range = `${formattedStartedDate} - ${formattedEnddDate}`
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex ">
        <section className="flex-grow px-6 pt-14">
          <p className="text-sm">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>
          <div className="mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 md:inline-flex">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map((item, index) => (
              <InfoCard item={item} key={index} />
            ))}
          </div>
        </section>
        <section className="hidden xl:inline-flex ">
          <Map searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
  const searchResults = await fetch('https://jsonkeeper.com/b/4W7K').then(
    (res) => res.json()
  )
  return {
    props: {
      searchResults,
    },
  }
}
