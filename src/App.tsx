import './App.css'
import data from './assets/data.json'
import OfferCard from './components/OfferCard'

function App() {

  return (
    <>
      <h1>Bank Bonus Tracker</h1>
      <section>
        <h2>Available Offers</h2>
        <ul className='all-offers'>
          {data.map((offer) => 
            <OfferCard offer={offer} />
          )}
        </ul>
      </section>
    </>
  )
}

export default App
