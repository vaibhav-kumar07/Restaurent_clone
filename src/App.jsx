import Navbar from './Components/Navbar'
import Hero from "./Components/Hero"
import './App.css'
import About from './Components/About'
import Chef from './Components/Chef'
import Video from "./images/Video.png"
import ChefWord from './Components/ChefWord'
import Gallery from './Components/Gallery'
import FindUs from './Components/FindUs'
import Newsletter from './Components/Newsletter'
import Footer from './Components/Footer'
import Lastsection from './Components/Lastsection'
function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Chef/>
     <div className='videoimage'>
     <img src={Video} alt="image" className='video' />
     </div>
     <ChefWord/>
     <Gallery/>
     <FindUs/>
     <Newsletter/>
     <Footer/>
     <Lastsection/>


    </>
  )
}

export default App
