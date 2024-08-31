import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="banner">
        <div className="title">
        <h1>GAUR'S</h1>
        <p>Events and Weddings</p>
        </div>
      <div className="tag">
        <label>News Letter</label>
        <form>
        <div>
          <input type="email" placeholder="E-mail"/>
          <button>Subscribe</button>
        </div>
        </form>
        <p>Sign up with your email address to receive news and updates!!</p>
      </div>
    </div>
    </footer>
  )
}

export default Footer
