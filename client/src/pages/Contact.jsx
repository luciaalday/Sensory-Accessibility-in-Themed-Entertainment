// src/pages/contact.jsx
import { useState } from 'react';
import bg from '../img/pipelin.png'

export default function Contact() {
  const [result, setResult] = useState("");
  
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "bf9298c8-6758-47ac-8e4e-a3a3a9184277");
  
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
  
    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

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
      <form action="https://api.web3forms.com/submit" method="POST">
        <h2>Questions?</h2>
        <input type="hidden" name="access_key" value="bf9298c8-6758-47ac-8e4e-a3a3a9184277" />
        <input type="hidden" name="subject" value="New message regarding Sensory Accessibility in Themed Entertainment" />
        <input type="hidden" name="from_name" value="SATE Contact Form" />
        <label>Name</label>
        <input type="text" name="name" required />
        <label>Email</label>
        <input type="email" name="email" required />
        <label>Ask away</label>
        <textarea name="message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}