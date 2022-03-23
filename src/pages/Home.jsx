import Categories from "../components/Categories"
import Navbar from "../components/Navbar"
import NavPromo from "../components/NavPromo"
import Slider from "../components/Slider"
import Trending from "../components/Trending"
import Products from "../components/products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"




const Home = () => {
  return (
      <div>
    <Navbar/>
    <NavPromo/>
    <Slider/>
    <Categories/>
    <Trending/>
    <Products/>
    <Newsletter/>
    <Footer/>
      </div>

  )
}

export default Home