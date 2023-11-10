import React from 'react'

export default function Navbar() {
  return (
    <div className='navBar mx-auto px-6 flex justify-between'>
        <div className='left-nav'>Logo</div>
        <div className='right-nav'>
            <button className='registerBtn'>Register</button>
            <button className='loginBtn'>Login</button>   
        </div>
    </div>
  )
}
