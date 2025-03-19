import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Craving Something Delicious? Order Now!</h2>
            <p>Delicious meals from your favorite restaurants, delivered right to your doorstep!</p>
            <button className='browseBtn'>Browse Menu</button>
        </div>
    </div>
  )
}

export default Header