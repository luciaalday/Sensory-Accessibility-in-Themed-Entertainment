import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link className="nav-link" to='/'>Home</Link>
      <Link className="nav-link" to='/info'>Information</Link>
      <Link className="nav-link" to='/view'>Databases</Link>
      <Link className="nav-link" to='/visit'>Visitation Guidelines</Link>
      <Link className="nav-link" to='/design'>Design Guidelines</Link>
      <Link className="nav-link" to='/contact'>Contact</Link>
    </nav>
  )
}