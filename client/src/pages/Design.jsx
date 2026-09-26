// src/pages/design.jsx
import bg from '../img/hollywood-drift.png'

export default function Design() {
  return (
    <div className="page">
      <article className="hero" style={{backgroundImage:`linear-gradient(to right, #ab0520e0, #0c234be0), url(${bg})`}}>
        <h1>Design Guidelines</h1>
      </article>
    </div>
  )
}