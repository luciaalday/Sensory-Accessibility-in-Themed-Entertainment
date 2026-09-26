// src/pages/Information.jsx
import bg from '../img/popeyes.png'

export default function Information() {
  return (
    <div className="page">
      <article className="hero" style={{backgroundImage:`linear-gradient(to right, #ab0520e0, #0c234be0), url(${bg})`}}>
        <h1>Information</h1>
      </article>
    </div>
  )
}