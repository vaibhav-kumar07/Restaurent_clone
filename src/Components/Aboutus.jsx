import React from 'react'

export default function Aboutus(props) {
    console.log(props);
  return (
    <section className='aboutus'>
        <h1>{props.title}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eveniet molestias minima officiis ullam fuga mollitia nisi veniam beatae quis voluptatibus cumque quibusdam veritatis qui nesciunt quod aspernatur illum? Perspiciatis?</p>
        <button className='movingitem'>{props.title}</button>
    </section>
  )
}
