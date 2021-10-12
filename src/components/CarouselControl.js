import React from 'react'

const CarouselControl = ({type, label}) => {
  return (
    <button className={`carousel-control-${type}`} type="button" data-bs-target="#apresentacao" data-bs-slide={type}>
      <span className={`carousel-control-${type}-icon`} aria-hidden="true"></span>
      <span className="visually-hidden">{label}</span>
    </button>      
  )
}

export default CarouselControl
