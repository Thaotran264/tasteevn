import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Infor from '../components/Infor'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className='bg-light'>
      <Navbar />
      <Carousel />
      <Infor />
      <Menu />
      <Footer />
    </div>
  )
}
