import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav>
        <div className="icon">&#9776;</div>
        <div className="nav-links">
          <Link className="nav-link" to='/'>Home</Link>
          <Link className="nav-link" to='/info'>Information</Link>
          <Link className="nav-link" to='/view'>Databases</Link>
          <div className="dropdown">
            <div className="disabled nav-link">Guidelines</div>
            <div className="dropdown-content">
              <Link className="nav-link" to='/visit'>For Visitation</Link>
              <Link className="nav-link" to='/design'>For Design</Link>
            </div>
          </div>
          <Link className="nav-link" to='/contact'>Contact</Link>
        </div>
      </nav>
    </>
  )
}