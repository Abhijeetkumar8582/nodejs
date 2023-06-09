import React from 'react'

function Footer() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/articles/Post">Home</a>
              <a className="nav-link" href="/articles/Post">Features</a>
              <a className="nav-link" href="/articles/Post">Pricing</a>
              <a className="nav-link disabled">Disabled</a>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Footer