# Sunrise-Solars — Complete Project (Editable)

This canvas contains the **full, editable source** for the Sunrise Solars project. Copy-paste each file into your editor, or edit right here and then request a ZIP download. Files are grouped and clearly labeled.

---

## Project root files

### package.json

```json
{
  "name": "sunrise-solars",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "framer-motion": "10.12.6"
  },
  "devDependencies": {
    "autoprefixer": "10.4.14",
    "postcss": "8.4.28",
    "tailwindcss": "3.5.4"
  }
}
```

---

### next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = nextConfig
```

---

### tailwind.config.js

```js
export default {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sunrise: '#FFD633',
        freshgreen: '#4CAF50',
        skyblue: '#4A90E2',
        earthsand: '#F9F5E9',
        charcoal: '#2E2E2E'
      }
    }
  },
  plugins: []
}
```

---

### postcss.config.js

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
```

---

### README.md

```markdown
# Sunrise Solars

## Setup
1. `npm install`
2. `npm run dev`

## Notes
- Tailwind preconfigured via `globals.css`.
- Add images to `/public/images`.
```

---

## /public (notes)

Place images in `/public/images/`: `hero.jpg`, `farm.jpg`, `portable.jpg`, `business.jpg`, `logo.svg`.

---

## /pages

### pages/_app.js

```jsx
import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }){
  return (
    <>
      <Head>
        <title>Sunrise Solars — Power Your Future</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
```

---

### pages/index.js

```jsx
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import SolutionsGrid from '../components/SolutionsGrid'
import Testimonials from '../components/Testimonials'

export default function Home(){
  return (
    <div>
      <Header />
      <Hero />
      <section className="bg-earthsand py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Why switch to solar?</h2>
          <p className="mt-2 text-gray-700">Cleaner energy, lower bills, more independence.</p>
        </div>
      </section>
      <SolutionsGrid />
      <Testimonials />
      <Footer />
    </div>
  )
}
```

---

### pages/solutions/index.js

```jsx
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const sols = [
  {id:'home', title:'Home Solar Systems', blurb:'Rooftop solutions tailored to family size.'},
  {id:'farm', title:'Field & Farm Solar', blurb:'Weatherproof setups for pumps and cold storage.'},
  {id:'portable', title:'Portable Solar Kits', blurb:'Power on the go for travel or emergencies.'},
  {id:'business', title:'Commercial & Industrial', blurb:'Scaleable systems for businesses.'}
]

export default function Solutions(){
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Solutions</h1>
        <div className="mt-6 grid md:grid-cols-4 gap-6">
          {sols.map(s=> (
            <Link key={s.id} href={`/solutions/${s.id}`} className="block bg-white rounded-xl shadow p-4 hover:scale-[1.01] transition-transform">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{s.blurb}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
```

---

### pages/solutions/[id].js

```jsx
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const details = {
  home: {title:'Home Solar Systems', text:'Rooftop systems for families.'},
  farm: {title:'Field & Farm Solar', text:'For pumps, cold storage and irrigation.'},
  portable: {title:'Portable Solar Kits', text:'Travel-ready, emergency kits.'},
  business: {title:'Commercial & Industrial', text:'Scaleable solutions & monitoring.'}
}

export default function SolutionDetail(){
  const {query} = useRouter()
  const id = query.id || 'home'
  const s = details[id] || details.home
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">{s.title}</h1>
        <p className="mt-4 text-gray-700">{s.text}</p>
      </main>
      <Footer />
    </div>
  )
}
```

---

### pages/calculator.js

```jsx
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Calculator(){
  const [monthly, setMonthly] = useState(5000)
  const estimated = Math.round((monthly*12)*0.7)
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Savings Calculator</h2>
        <input type="range" min="500" max="50000" value={monthly} onChange={(e)=>setMonthly(Number(e.target.value))} className="w-full mt-4" />
        <div className="mt-4 text-3xl">₹{estimated.toLocaleString()}</div>
      </main>
      <Footer />
    </div>
  )
}
```

---

### pages/resources.js

```jsx
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function Resources(){
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Resources & Guides</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <Card title="Govt Subsidies" blurb="Step-by-step to claim benefits" />
          <Card title="Battery Choices" blurb="Which battery fits your needs" />
          <Card title="Maintenance" blurb="Keep panels efficient for years" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
```

---

### pages/about.js

```jsx
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">About Sunrise Solars</h2>
        <p className="text-gray-700 mt-2">We deliver trusted solar installations with a focus on quality, community and clear pricing.</p>
      </main>
      <Footer />
    </div>
  )
}
```

---

### pages/contact.js

```jsx
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function Contact(){
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p className="text-gray-700">Request a free site visit or ask a question.</p>
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
```

---

### pages/faq.js

```jsx
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function FAQ(){
  const faqs = [
    {q:'How long does installation take?', a:'Typically 1-7 days depending on size.'},
    {q:'Do you help with government subsidies?', a:'Yes — we assist with paperwork and claims.'},
    {q:'What warranty do you provide?', a:'Panels 10-25 years, inverters 5-10 years depending on model.'}
  ];
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <div className="mt-6 space-y-4">
          {faqs.map(f => (
            <details key={f.q} className="bg-white p-4 rounded shadow">
              <summary className="font-semibold">{f.q}</summary>
              <div className="mt-2 text-gray-700">{f.a}</div>
            </details>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
```

---

### pages/terms.js

```jsx
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Terms(){
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Terms & Privacy</h2>
        <p className="text-gray-700 mt-2">Short, user-friendly terms placeholder — replace with legal copy.</p>
      </main>
      <Footer />
    </div>
  )
}
```

---

## /components

### components/Header.jsx

```jsx
import Link from 'next/link'

export default function Header(){
  return (
    <header className="bg-white/80 sticky top-0 backdrop-blur z-30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{backgroundColor:'#FFD633'}}>☀️</div>
          <div>
            <div className="font-semibold text-charcoal">Sunrise Solars</div>
            <div className="text-xs text-gray-500">Power for every tomorrow</div>
          </div>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/solutions">Solutions</Link>
          <Link href="/calculator">Calculator</Link>
          <Link href="/about">About</Link>
          <Link href="/contact" className="px-3 py-2 rounded bg-sunrise text-black font-semibold">Get Assessment</Link>
        </nav>
      </div>
    </header>
  )
}
```

---

### components/Footer.jsx

```jsx
export default function Footer(){
  return (
    <footer className="bg-charcoal text-white py-10">
      <div className="max-w-6xl mx-auto px-6">© {new Date().getFullYear()} Sunrise Solars</div>
    </footer>
  )
}
```

---

### components/Hero.jsx

```jsx
export default function Hero(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-extrabold">Harness the Sun. <span className="text-sunrise">Power Your Future.</span></h1>
        <p className="mt-4 text-gray-700">Clean, reliable and affordable solar solutions for homes, farms and businesses.</p>
        <div className="mt-6 flex gap-3">
          <a href="/contact" className="px-5 py-3 rounded-lg font-semibold shadow" style={{backgroundColor:'#FFD633'}}>Get Free Assessment</a>
          <a href="/solutions" className="px-5 py-3 rounded-lg border">See Solutions</a>
        </div>
      </div>
      <div className="flex-1">
        <img src="/images/hero.jpg" alt="solar family" className="w-full h-96 object-cover rounded-2xl shadow-2xl" />
      </div>
    </section>
  )
}
```

---

### components/SolutionsGrid.jsx

```jsx
import Link from 'next/link'

const solutions = [
  {id:'home', title:'Home Solar Systems', img:'/images/hero.jpg'},
  {id:'farm', title:'Field & Farm Solar', img:'/images/farm.jpg'},
  {id:'portable', title:'Portable Solar Kits', img:'/images/portable.jpg'},
  {id:'business', title:'Commercial & Industrial', img:'/images/business.jpg'}
]

export default function SolutionsGrid(){
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Our Solutions</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          {solutions.map(s => (
            <Link key={s.id} href={`/solutions/${s.id}`} className="group block rounded-xl overflow-hidden shadow bg-white">
              <div className="h-40 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{s.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

### components/Testimonials.jsx

```jsx
export default function Testimonials(){
  const items = [
    {name:'Ravi, Farmer', quote:'Installed on my pump — now I run irrigation without high bills.'},
    {name:'Meera & Family', quote:'Our home runs on solar and we saved 60% on electricity.'},
    {name:'Amit, Café Owner', quote:'Business stability improved during summer loads — great ROI.'}
  ];
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold">What our customers say</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map(it => (
            <div key={it.name} className="p-6 rounded-xl shadow bg-earthsand">
              <div className="font-semibold">{it.name}</div>
              <div className="mt-3 text-gray-700">“{it.quote}”</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

### components/Card.jsx

```jsx
export default function Card({title, blurb}){
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-600 mt-2">{blurb}</p>
    </div>
  )
}
```

---

### components/ContactForm.jsx

```jsx
import { useState } from 'react'

export default function ContactForm(){
  const [form, setForm] = useState({name:'', phone:'', email:'', message:''})
  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: hook up to backend/email
    alert('Request sent — replace with real submission')
  }
  return (
    <form onSubmit={handleSubmit} className="mt-6 bg-white p-6 rounded-xl shadow grid gap-4">
      <input placeholder="Your name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="p-3 border rounded" />
      <input placeholder="Phone" value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} className="p-3 border rounded" />
      <input placeholder="Email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="p-3 border rounded" />
      <textarea placeholder="Message" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} className="p-3 border rounded h-28" />
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">We respect your privacy and will only use contact details to respond.</div>
        <button type="submit" className="px-4 py-2 rounded-lg" style={{backgroundColor:'#FFD633'}}>Send Request</button>
      </div>
    </form>
  )
}
```

---

## /styles

### styles/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root{
  --sunrise: #FFD633;
  --fresh-green: #4CAF50;
  --sky-blue: #4A90E2;
  --earth-sand: #F9F5E9;
  --charcoal: #2E2E2E;
}

body{font-family: Inter, ui-sans-serif, system-ui, -apple-system;}
```

---

## /static-export

### static-export/index.html

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <script src="https://cdn.tailwindcss.com"></script>
  <title>Sunrise Solars</title>
</head>
<body class="bg-white font-sans">
  <header class="p-6 flex items-center justify-between">
    <div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center">☀️</div><div class="font-semibold">Sunrise Solars</div></div>
    <a href="#contact" class="px-4 py-2 bg-yellow-300 rounded">Get Assessment</a>
  </header>

  <main class="px-6 py-20 max-w-5xl mx-auto flex gap-8 items-center">
    <div class="flex-1">
      <h1 class="text-5xl font-extrabold">Harness the Sun. <span class="text-yellow-400">Power Your Future.</span></h1>
      <p class="mt-4 text-gray-700">Clean energy for homes, farms and businesses.</p>
      <div class="mt-6"><a class="px-5 py-3 bg-yellow-300 rounded" href="#contact">Get Free Assessment</a></div>
    </div>
    <div class="flex-1"><img src="/images/hero.jpg" alt="solar" class="rounded-xl shadow"/></div>
  </main>
</body>
</html>
```

---

## Figma brief (figma-brief.md)

```markdown
# Figma Brief — Sunrise Solars

## Tokens
- Primary: #FFD633
- Accent: #4CAF50
- Support: #4A90E2, #F9F5E9, #2E2E2E
- Typography: Inter

## Pages
Home, Solutions, Calculator, Contact, Resources, About, FAQ

## Components
Header, Hero, Card, Form, Footer, Testimonial, CTA

## Exports
SVG icon set, hero images, spacing tokens
```

---

## What I just did
- Pasted the full contents of every file into this canvas as requested. These are editable here.

---

## Next (I will do right away if you want):
1. **Generate a downloadable ZIP** of the project and provide a link. (I can create the .zip here and give a download link.)
2. **Produce a Figma file** (I can provide a Figma importable JSON or provide a downloadable design package with SVGs and tokens). 

Say **“create zip”** to get the ZIP downloadable link and **“figma file”** to get the Figma package. Or say **both** and I’ll produce them now.
