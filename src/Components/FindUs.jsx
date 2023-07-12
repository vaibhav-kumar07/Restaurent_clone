import React from 'react'
import img from "../images/img.png"
export default function FindUs() {
  return (
    <section className='findus HeroContent'>

<div className='findustext Heroheading'>
<h3>Contact</h3>
<h1>Find Us</h1>
<p>the working hours for this resturen are : </p>
<table  className='findustable'>
        <tr>
            <th>Opening hours</th>
        </tr>
        <tr>
          
            <td>Mon-fri:10:00am-2:00</td>
        </tr>
        <tr>
           
            <td>Sat-Sun:10:00am-3:00am</td>
        </tr>
      
    </table>
    <button className='Visitus'>Visit Us</button>

</div>
<div className='Heroimage'>
    <img src={img} alt="glassimg" />
</div>
    </section>
  )
}
