// src/pages/database.jsx
import { useState } from 'react'
import parks from '../data/parks.json'
import bg from '../img/hulk-day.png'

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

  const labels = {
    risk_level: (v) => `Risk Level: ${v}`,
    sound_level: (v) => `Sound Level: ${v} dB`,
    crowd_density: (v) => `Crowd Density: ${v}`,
    sound_sources: (v) => `Sound Sources: ${v}`,
    foliage_amount: (v) => `Foliage: ${v}`,
    strong_scent: (v) => (v ? 'Strong Scent observed' : 'No strong scent'),
    high_heat_risk: (v) => (v ? 'High heat risk observed' : 'No high heat risk'),
    visually_aggressive: (v) => (v ? 'Visually aggressive' : 'Not visually aggressive'),
    surprising_effect: (v) => (v ? 'Surprising effect observed' : 'No surprising effect'),
    claustrophobic_why: (v) => (v ? `Claustrophobic: ${v}` : 'Not claustrophobic'),
  };
  
  const tooltip = (n, attribute) => {
    const format = labels[attribute];
    return format ? `${format(n[attribute])}` : ``;
  };

  const foliageRank = { Low: 0, Medium: 1, High: 2 };

  const score = (n, attr) => {
    const v = n[attr];
    if (typeof v === 'number') return v;
    if (attr === 'foliage_amount') return foliageRank[v] ?? 0;
    return v ? 1 : 0;
  };

  const color = (t) => `hsl(${150 - 150 * t}, 70%, 45%)`;

  const max = Math.max(...nodes.map((n) => score(n, attribute))) || 1;

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
                      d={n.svg_path}
                      onMouseEnter={() => setHovered(n.node)}
                      onMouseLeave={() => setHovered(null)}
                      style={attribute === 'no_filter' ? undefined : { fill: color(score(n, attribute) / max) }}
                      />
                    <text
                      x={n.x_label}
                      y={n.y_label}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      pointerEvents="none"
                    >
                      {n.node}
                    </text>
                    <title>{tooltip(n, attribute)}</title>
                  </g>
                ))}
            </svg>
          </div>
          <div className='column info-container'>
            {activeNode ? (
              <>
                <h2>Node {activeNode.node}</h2>
                <p><b>Risk Level:&ensp;</b>{activeNode.risk_level}</p>
                <p><b>Sound Level:&ensp;</b>{activeNode.sound_level} db</p>
                <p><b>Crowd Density:&ensp;</b>{activeNode.crowd_density}</p>
                <p><b>Sound Sources:&ensp;</b>{activeNode.sound_sources}</p>
                <p><b>Foliage Amount:&ensp;</b>{activeNode.foliage_amount}</p>
                <p><b>Common Material:&ensp;</b>{activeNode.common_material}</p>
                {activeNode.strong_scent && <p><b>Strong Scent</b></p>}
                {activeNode.high_heat_risk && <p><b>High Heat Risk</b></p>}
                {activeNode.visually_aggressive && <p><b>Visually Aggressive</b></p>}
                {activeNode.surprising_effect && <p><b>Surprising Effect</b></p>}
                {activeNode.claustrophobic_why && <p><b>Claustrophobic/why:&ensp;</b>{activeNode.claustrophobic_why}</p>}
                {activeNode.notes && <p><b>Notes:&ensp;</b>{activeNode.notes}</p>}
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