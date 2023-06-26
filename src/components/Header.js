import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" 
  data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
   aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link class="navbar-brand text-white" to="/">Register</Link>
      <Link className="navbar-brand text-white" to="showlist">Data-List</Link>
      <Link className="navbar-brand text-white" to="update">Update</Link>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header