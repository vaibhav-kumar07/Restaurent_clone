import React from 'react'
import image2 from "../images/image2.png"
import image3 from "../images/image3.png"
import image4 from "../images/image4.png"
import image5 from "../images/image5.png"
import InstaImages from './InstaImages'


const galleryimages=[image2,image3,image4,image5]
export default function Gallery() {
   
  return (
    <section  className='gallery'>
    <div className='gallerytexts'>
        <h3>Instagram</h3>
        <h1>Photo Gallery</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ducimus illum atque? Dolorem enim labore, at sapiente earum nulla corrupti non eveniet consectetur eum quo doloribus debitis maxime id rem?</p>
        <button>View more</button>
    </div>
    <div className='galleryimages'> 
    {galleryimages.map((Image) => {
          return <InstaImages img={Image} />;
        })}
    </div>
    </section>
  )
}
