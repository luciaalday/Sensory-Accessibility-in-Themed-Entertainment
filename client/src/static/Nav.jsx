import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button className="nav-button" onClick={()=>setOpen(!open)} ><b>&#9776;</b></button>
      <nav className={open ? '' : 'closed'}>
        <Link className="nav-link" to='/'>Home</Link>
        <Link className="nav-link" to='/info'>Information</Link>
        <Link className="nav-link" to='/view'>Databases</Link>
        <Link className="nav-link" to='/visit'>Visitation Guidelines</Link>
        <Link className="nav-link" to='/design'>Design Guidelines</Link>
        <Link className="nav-link" to='/contact'>Contact</Link>
      </nav>
    </>
  )
}