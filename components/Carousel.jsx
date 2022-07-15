import React from 'react'

const Carousel = () => {
  return (
    <div className='container'>
    <div id="carouselExampleControls" class="carousel slide d-flex" data-bs-ride="carousel">
    <div class="carousel-inner  d-flex">
      <div class="carousel-item active">
        <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600" class="d-block img-thumbnail w-25" alt="..."/>
      </div>
      <div class="carousel-item d-flex">
        <img src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600" class="d-block img-thumbnail w-25" alt="..."/>
       
      </div>
      <div class="carousel-item d-flex">
        <img src="https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1600" class="d-block img-thumbnail w-25" alt="..."/>

      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  )
}

export default Carousel