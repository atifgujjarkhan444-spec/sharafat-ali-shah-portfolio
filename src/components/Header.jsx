import { Menu, ShoppingBag, UserRound, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { count, setDrawerOpen, currency, currencies, changeCurrency } = useCart();
  const [open, setOpen] = useState(false);
  const nav = [{to:'/',label:'Home'},{to:'/shop',label:'Shop'},{to:'/about',label:'About'},{to:'/contact',label:'Contact Us'}];
  return <header className="site-header">
    <div className="topbar"><div className="container topbar-inner"><span>Traditional herbal & Unani products</span><a href="https://wa.me/923156928894" target="_blank" rel="noreferrer">WhatsApp: 0315-6928894</a></div></div>
    <div className="container header-inner">
      <Link className="logo-link" to="/"><img src="/images/logo.png" alt="Hakeem Syed Sharafat Ali Shah" /></Link>
      <nav className={open ? 'main-nav open' : 'main-nav'}>{nav.map(n => <NavLink key={n.to} to={n.to} onClick={()=>setOpen(false)}>{n.label}</NavLink>)}</nav>
      <div className="header-actions">
        <select className="currency-select" value={currency} onChange={e=>changeCurrency(e.target.value)} aria-label="Currency">
          {Object.entries(currencies).map(([code, info]) => <option key={code} value={code}>{info.label}</option>)}
        </select>
        <button className="icon-btn" onClick={()=>setDrawerOpen(true)} aria-label="Open cart"><ShoppingBag size={21}/>{count>0 && <b>{count}</b>}</button>
        <Link className="icon-btn account-link" to="/my-account" aria-label="My account"><UserRound size={21}/></Link>
        <button className="mobile-toggle" onClick={()=>setOpen(v=>!v)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
      </div>
    </div>
  </header>;
}
