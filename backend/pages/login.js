import React from 'react'
import Image from 'next/image'

const login = () => {
  return (
    <>
    <div className='loginfront flex flex-center flex-col full-w'>
        <Image src='/img/coder.png' width={250} height={250}/>
        <h1>Welcome Admin 🤞 </h1> 
        <p>Visit Our Main Website <a href=''>Ranjiv.Photography</a></p> 
        <button className='mt-2'>Login with Google</button>
    </div>
    </>
  )
}

export default login