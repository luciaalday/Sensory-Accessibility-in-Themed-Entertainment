// src/pages/Home.jsx
import bg from '../img/hardrock.png'

export default function Home() {
  return (
    <div className="page">
      <article className="hero" style={{backgroundImage:`linear-gradient(to right, #ab0520e0, #0c234be0), url(${bg})`}}>
        <h1>Homepage</h1>
        <p>Hero section</p>
        <button>CTA Button</button>
      </article>
      <article>
        <h1>Content</h1>
        <p>Lorem ipsum</p>
      </article>
    </div>
  )
}