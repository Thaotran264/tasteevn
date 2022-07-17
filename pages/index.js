import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Infor from '../components/Infor'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import Slide from '../components/Slider'

export default function Home() {
  return (
    <div className='bg-light'>
              <Navbar />
      <Carousel />
      <Infor />
      <Slide />
      <Menu />
      <Footer />
    </div>
  )
}
