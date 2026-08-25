import { Link } from 'react-router-dom';
export default function PageHero({title,crumb=title}){return <section className="page-hero"><div className="container"><div><Link to="/">Home</Link><span> / </span><b>{crumb}</b></div><h1>{title}</h1></div></section>}
