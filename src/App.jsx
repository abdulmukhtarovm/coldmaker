import Benefits from './components/Benefits'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import OurWay from './components/OurWay'
import Question from './components/Question'
import Reviews from './components/Reviews'
import Services from './components/Services'
import Specialists from './components/Team'

const App = () => {
  return (
    <>
         <Navbar />
      <Header />
      <Services />
      <Question />
      <OurWay />
      <Specialists /> 
      <Benefits />
      <Reviews />
      <Footer /> 
    </>
  )
}

export default App
