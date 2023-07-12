import React from 'react'

export default function Childfooter(props) {
  return (
    <div className='childfooter'>
        <h2 className={props.class}>{props.title}</h2>
        <p>{props.firstpara} <br/> {props.secondpara} </p><p>{props.thirdpara} <br/>{props.forthpara}
        </p>
    </div>
  )
}
