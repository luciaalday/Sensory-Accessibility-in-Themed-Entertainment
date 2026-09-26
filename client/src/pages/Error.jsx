// src/pages/Error.jsx
import { Link } from 'react-router-dom'
import bg from '../img/swish.png'

export default function Error({ code, url=null, link='/', redirect='Back to homepage' }) {
    const message = {
        307: 'Page has temporarily been moved to',
        308: 'Page has permanently been moved to',
        400: 'Request cannot be filled due to bad syntax',
        401: 'Authentication required',
        402: 'Payment required',
        403: 'Access denied',
        404: 'Page not found',
        500: 'Internal server error'
    };

    return (
        <div className='page'>
            <article className="hero" style={{backgroundImage:`linear-gradient(to right, #ab0520e0, #0c234be0), url(${bg})`}}>
                <h1>Error {code}</h1>
            </article>
            <article>
                <h2>{message[code]}</h2>
                {link && <Link to={link}>{redirect??link}</Link>}
                {url  && <a href={url}>{redirect??url}</a>}
            </article>
        </div>
    );
}