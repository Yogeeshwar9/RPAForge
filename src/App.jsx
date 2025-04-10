import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ImgCarousel from './components/ImgCarousel'
import BodyCard from './components/BodyCard'
function App() {

  return (
    <>
      <div>
        <Navbar/>
        <ImgCarousel />
        <BodyCard/>
        <Footer/>
      </div>
    </>
  )
}

export default App
