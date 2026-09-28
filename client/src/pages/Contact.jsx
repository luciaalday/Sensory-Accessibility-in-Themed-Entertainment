// src/pages/contact.jsx
import bg from '../img/pipelin.png'

export default function Contact() {
  const handleSubmit = () => {

  }
  return (
    <div className="page">
      <article className="hero" style={{backgroundImage:`linear-gradient(to right, #ab0520e0, #0c234be0), url(${bg})`}}>
        <h1>Contact</h1>
      </article>
      <article>
        <h2>Questions?</h2>
        <h4>Anthony Rascon</h4>
        <p>Email: <a href='mailto:rasconhanthony@arizona.edu'>rasconhanthony@arizona.edu</a></p>
      </article>
      <form onSubmit={handleSubmit}>
        <h2>Questions?</h2>
        <label>Name</label>
        <input />
        <label>Email</label>
        <input />
        <label>Ask away</label>
        <textarea />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}