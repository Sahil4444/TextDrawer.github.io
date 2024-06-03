import React from 'react';
import avatar from '../assets/avatar.jpg';

export default function About() {

    const imgStyle = {
        width: '200px',
        height: '200px',
        borderRadius: '50%'
    }
  return (
    <div className='d-flex justify-content-center align-items-center flex-column bd-highlight'>
      <img className='my-4' src={avatar} alt="" style={imgStyle} />
      <h1>Sahil Sanjay Narale</h1>
      <p className='my-4' style={{textAlign: 'justify', width: '50%'}}>Hi there, I am Sahil, a dedicated programmer with a keen interest in developing new software that may contribute to improving society or organization.

As a Software developer, I aim to build solutions that can make human life easier in any way possible.
I am a third-year BE student.

I am always eager to learn new technologies and use them in the current system to make them more efficient and robust.

I am looking forward to connecting with you 😊.</p>
    </div>
  )
}
