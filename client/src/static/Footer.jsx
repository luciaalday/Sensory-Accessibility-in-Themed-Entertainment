import { Link } from "react-router-dom"
import blockA from '../img/blockA.png'
import tpegLogo from '../img/Official_Logo.png'

export default function Footer() {
  return (
    <footer>
      <img alt='TPEG logo' src={tpegLogo} />
      <div className="row">
      <div>
        <p>Sensory Accessibility in Themed Entertainment</p>
        <p>&copy; Anthony Rascon, Icarus Newton, Lucia Alday</p>
      </div>
      <hr></hr>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/info'>Information</Link>
        <Link to='/view'>Databases</Link>
        <Link to='/maps'>Maps</Link>
        <Link to='/visit'>Visitation Guidelines</Link>
        <Link to='/design'>Design Guidelines</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      </div>
      <img alt='University of Arizona logo' src={blockA} />
    </footer>
  )
}