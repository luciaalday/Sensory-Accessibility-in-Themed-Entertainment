// src/pages/database.jsx
import { useState } from 'react'
import parks from '../data/parks.json'
import bg from '../img/hulk-day.png'
import Loading from '../components/Loading';

export default function Database() {
  const parkNames = Object.keys(parks);
  const [name, setName] = useState(parkNames[0]);
  const [hovered, setHovered] = useState(null);
  const [attribute, setAttribute] = useState('no_filter');

  const park = parks[name];
  const mapImage = park?.image_file ? `/map/${park.image_file}` : null;

  const handleParkChange = (e) => {
    setName(e.target.value);
    setHovered(null);
  };

  const nodes = park?.nodes ?? [];
  const activeNode = nodes.find((n) => n.node === hovered);

  return (
    <div className="page">
      <article className="hero" style={{backgroundImage:`linear-gradient(to right, #ab0520e0, #0c234be0), url(${bg})`}}>
        <h1>Databases</h1>
        <select value={name} onChange={handleParkChange}>
          {parkNames.map((key) => (
            <option key={key} value={key}>{key}</option>
          ))}
      </select>
      </article>
      <article>
        <h1>{name}</h1>
        <select value={attribute} onChange={(e) => setAttribute(e.target.value)}>
          <option value="no_filter">No Filter</option>
          <option value="risk_level">Risk Level</option>
          <option value="sound_level">Sound Level</option>
          <option value="crowd_density">Crowd Density</option>
          <option value="sound_sources">Sound Sources</option>
          <option value="strong_scent">Strong Scent</option>
          <option value="high_heat_risk">High Heat Risk</option>
          <option value="visually_aggressive">Visually Aggressive</option>
          <option value="surprising_effect">Surprising Effect</option>
          <option value="foliage_amount">Foliage Amount</option>
          <option value="claustrophobic_why">Claustrophic</option>
        </select>
        <section>
          <div className='map-container' style={mapImage ? {backgroundImage: `linear-gradient(#84858680, #84858680), url(${mapImage})`} : undefined}>
            <svg viewBox="0 0 500 500">
              {nodes
                .filter((n) => n.svg_path)
                .map((n) => (
                  <g key={n.node}>
                  <path
                    key={n.node}
                    d={n.svg_path}
                    onMouseEnter={() => setHovered(n.node)}
                    onMouseLeave={() => setHovered(null)}
                    className={attribute === 'risk_level' ? (n[attribute] > 4 ? 'bad' : n[attribute] > 2 ? 'mid' : 'good') 
                      : attribute === 'sound_level' ? (n[attribute] > 90 ? 'bad' : n[attribute] > 70 ? 'mid' : 'good')
                      : attribute === 'crowd_density' ? (n[attribute] > 90 ? 'bad' : n[attribute] > 70 ? 'mid' : 'good')
                      : attribute === 'sound_sources' ? (n[attribute] > 90 ? 'bad' : n[attribute] > 70 ? 'mid' : 'good')
                      : attribute === 'strong_scent' ? (n[attribute] > 90 ? 'bad' : n[attribute] > 70 ? 'mid' : 'good')
                      : attribute === 'high_heat_risk' ? (n[attribute] > 90 ? 'bad' : n[attribute] > 70 ? 'mid' : 'good')
                      : attribute === 'visually_aggressive' ? (n[attribute] > 90 ? 'bad' : n[attribute] > 70 ? 'mid' : 'good')
                      : attribute === 'surprising_effect' ? (n[attribute] > 90 ? 'bad' : n[attribute] > 70 ? 'mid' : 'good')
                      : attribute === 'foliage_amount' ? (n[attribute] > 90 ? 'bad' : n[attribute] > 70 ? 'mid' : 'good')
                      : attribute === 'claustrophobic_why' ? (n[attribute] > 90 ? 'bad' : n[attribute] > 70 ? 'mid' : 'good')
                      : ''
                    }
                    />
                  <text
                    x={n.x_label}
                    y={n.y_label}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    pointerEvents="none"
                  >
                    {n[attribute] ?? n.node}
                  </text>
                  </g>
                ))}
            </svg>
          </div>
          <div className='column'>
            {activeNode ? (
              <>
                <h2>Node {activeNode.node}</h2>
                <h3>Risk Level: {activeNode.risk_level}</h3>
              </>
            ) : (
              <p>Hover a node to see its stats</p>
            )}
          </div>
        </section>
      </article>
    </div>
  )
}