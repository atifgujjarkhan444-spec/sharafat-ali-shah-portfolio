# Hakeem Syed Sharafat Ali Shah — React Portfolio Store

A clean, responsive React + Vite frontend for a traditional herbal / Unani online store.

## Features
- Responsive premium storefront UI
- Home, Shop, Product Details, Cart, Checkout, My Account, About, Contact
- Search, category filtering and price sorting
- Product wishlist persisted in localStorage
- Cart Context API with quantity controls
- Cart drawer with View Cart and Checkout
- Cart persistence with localStorage
- Checkout validation
- Meezan Bank transfer UI + Cash on Delivery option
- Order ID generation and localStorage order record
- WhatsApp order message generation for `0315-6928894`
- Order success page
- Reusable components and clean page separation
- `/cart-2` and `/checkout-2` aliases matching the reference URLs

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Important production note
This is a frontend portfolio implementation. The payment selection is UI only; it does not verify bank payments or move money. For production, connect a secure backend, order database, authentication, server-side validation and a supported payment gateway/payment verification workflow.

## Structure
```text
src/
  components/    Reusable UI components
  context/       Cart Context + localStorage persistence
  data/          Product data
  pages/         Route-level pages
  App.jsx        App routes and layout
  main.jsx       React entry point
  styles.css     Global responsive styling
public/images/   Store and product images
```
