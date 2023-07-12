import React from 'react'

export default function Newsletter() {
  return (

    <section className='NewsletterBackground'>
        <div className='Newsletter'>
        <h3>Newsletter</h3>
        <h1>Subscribe To Our Newsletter</h1>
        <p>And never miss latest Updates</p>
        <div className='email'>
        <input type="email" placeholder='Email address'  className='emailinput'/>
        <button>Subscribe</button>
        
       </div>
       
       </div>
    </section>
  )
}
