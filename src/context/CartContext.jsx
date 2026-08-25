import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { products } from '../data/products';

const CartContext = createContext(null);
const KEY = 'hss-cart-v1';
const CURRENCY_KEY = 'hss-currency-v1';
export const currencies = { PKR: { label: 'PKR ₨', locale: 'en-PK' }, SAR: { label: 'SAR ر.س', locale: 'en-SA' }, USD: { label: 'USD $', locale: 'en-US' }, AED: { label: 'AED د.إ', locale: 'en-AE' }, KWD: { label: 'KWD د.ك', locale: 'en-KW' } };

function loadCart() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; } }

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart);
  const [currency, setCurrencyState] = useState(() => localStorage.getItem(CURRENCY_KEY) || 'PKR');
  const [drawerOpen, setDrawerOpen] = useState(false);
  useEffect(() => localStorage.setItem(KEY, JSON.stringify(items)), [items]);
  useEffect(() => localStorage.setItem(CURRENCY_KEY, currency), [currency]);

  const pricingFor = (product, selectedCurrency = currency) => product.prices?.[selectedCurrency] || (selectedCurrency === 'PKR' ? { price: product.price, oldPrice: product.oldPrice } : { price: Math.round(product.price * ({ SAR: .013, USD: .011, AED: .013, KWD: .0034 }[selectedCurrency])), oldPrice: Math.round(product.oldPrice * ({ SAR: .013, USD: .011, AED: .013, KWD: .0034 }[selectedCurrency])) });
  const formatMoney = value => new Intl.NumberFormat(currencies[currency].locale, { style: 'currency', currency, maximumFractionDigits: 0 }).format(value);
  const changeCurrency = next => { setCurrencyState(next); setItems(current => current.map(item => { const product = products.find(p => p.id === item.id) || item; return { ...item, ...pricingFor(product, next), currency: next }; })); };

  const addItem = (product) => {
    setItems(current => {
      const found = current.find(item => item.id === product.id);
      if (found) return current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...current, { ...product, ...pricingFor(product), currency, quantity: 1 }];
    });
    setDrawerOpen(true);
  };
  const updateQuantity = (id, quantity) => setItems(current => current.map(i => i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i));
  const removeItem = (id) => setItems(current => current.filter(i => i.id !== id));
  const clearCart = () => setItems([]);
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);
  const count = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);
  const value = { items, addItem, updateQuantity, removeItem, clearCart, subtotal, count, drawerOpen, setDrawerOpen, currency, currencies, pricingFor, formatMoney, changeCurrency };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export const useCart = () => useContext(CartContext);
