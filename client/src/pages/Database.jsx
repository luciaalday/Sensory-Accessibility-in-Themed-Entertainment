// src/pages/database.jsx
import { useState } from 'react'
import parks from '../data/parks.json'
import bg from '../img/hulk-day.png'
import Loading from '../components/Loading';

export default function Database() {
  const [park, setPark] = useState("00");
  const [name, setName] = useState("Reid Park Zoo");

  const handleParkChange = (e) => {
    setPark(e);

  }

  return (
    <div className="page">
      <article className="hero" style={{backgroundImage:`linear-gradient(to right, #ab0520e0, #0c234be0), url(${bg})`}}>
        <h1>Databases</h1>
        <select value={park} onChange={(e)=>handleParkChange(e.target.value)}>
          <option value="00">Reid Park Zoo</option>
        </select>
      </article>
      <article>
        <h1>{name}</h1>
        <section>
          <div className='map-container'>
            <Loading />
          </div>
          <div className='column'>

          </div>
        </section>
      </article>
    </div>
  )
}