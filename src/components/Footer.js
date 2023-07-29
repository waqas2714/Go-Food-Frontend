import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <Link to="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      </Link>
      <span class="text-muted">© 2023 GoFood; All Rights Reserved</span>
    </div>
  </footer>
    </div>
  )
}

export default Footer