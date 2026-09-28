// src/pages/database.jsx
import { useState } from 'react'
import parks from '../data/parks.json'
import bg from '../img/hulk-day.png'
import Loading from '../components/Loading';

const HIDDEN_FIELDS = ['svg_path', 'Node'];
const formatValue = (v) => (typeof v === 'boolean' ? (v ? 'Yes' : 'No') : v);

export default function Database() {
  const parkNames = Object.keys(parks);
  const [name, setName] = useState(parkNames[0]);
  const [hovered, setHovered] = useState(null);

  const park = parks[name];
  const mapImage = park?.Image_file ? `/map/${park.Image_file}` : null;

  const handleParkChange = (e) => {
    setName(e.target.value);
    setHovered(null);
  };

  const nodes = park?.Nodes ?? [];
  const activeNode = nodes.find((n) => n.Node === hovered);
  const stats = activeNode
    ? Object.entries(activeNode).filter(
        ([key, value]) => !HIDDEN_FIELDS.includes(key) && value !== ""
      )
    : [];

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
        <section>
          <div className='map-container' style={mapImage ? {backgroundImage: `linear-gradient(#84858680, #84858680), url(${mapImage})`} : undefined}>
            <svg viewBox="0 0 500 500">
              {nodes
                .filter((n) => n.svg_path)
                .map((n) => (
                  <g key={n.Node}>
                  <path
                    key={n.Node}
                    d={n.svg_path}
                    onMouseEnter={() => setHovered(n.Node)}
                    onMouseLeave={() => setHovered(null)}
                    />
                  <text
                    x={n.x_label}
                    y={n.y_label}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    pointerEvents="none"
                  >
                    {n.Node}
                  </text>
                  </g>
                ))}
            </svg>
          </div>
          <div className='column'>
            {activeNode ? (
              <>
                <h2>Node {activeNode.Node}</h2>
                {stats.map(([key, value]) => (
                  <div key={key}>{key}: {formatValue(value)}</div>
                ))}
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