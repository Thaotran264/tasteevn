import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,

    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    className: "slider variable-width",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
const listImg = ['https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600',
'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1600',
'https://images.pexels.com/photos/349609/pexels-photo-349609.jpeg?auto=compress&cs=tinysrgb&w=1600',
'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=1600',
'https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg?auto=compress&cs=tinysrgb&w=1600',
'https://images.pexels.com/photos/239581/pexels-photo-239581.jpeg?auto=compress&cs=tinysrgb&w=1600',
'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1600',
'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1600',
'https://images.pexels.com/photos/196643/pexels-photo-196643.jpeg?auto=compress&cs=tinysrgb&w=1600']

const Slide = () => {
    return (
        <div className="container py-2">
        <h2> Single Item</h2>
        <Slider {...settings}>
            {listImg.map((item,index) =>
            <div key={index} style={{width: '50px'}}>
            <img src={item} alt='' style={{width: '100%', objectFit: 'cover'}}/>
          </div>
            )}
          
        </Slider>
      </div>
    )
}
export default Slide