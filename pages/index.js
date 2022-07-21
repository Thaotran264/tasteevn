import Booking from '../components/Booking'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Infor from '../components/Infor'
import Menu from '../components/Menu'
import MenuPhoto from '../components/MenuPhoto'
import Navbar from '../components/Navbar'
import Slide from '../components/Slider'

export default function Home() {
  return (
    <div className='bg-light'>
              <Navbar />
      <Carousel />
      <Infor />
      <MenuPhoto />
      <Slide />
      <Booking />
      <Menu />
      <Footer />
    </div>
  )
}
