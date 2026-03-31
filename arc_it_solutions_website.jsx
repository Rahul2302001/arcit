import React from "react";
import { Button } from "@/components/ui/button";
import { Cpu, Cloud, Code, Layout, Database, Briefcase } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const services = [
  { title: "AI & Data Engineering", icon: <Cpu size={22} /> },
  { title: "Digital Product Development", icon: <Code size={22} /> },
  { title: "Cloud & DevOps", icon: <Cloud size={22} /> },
  { title: "UX/UI Design", icon: <Layout size={22} /> },
  { title: "Enterprise Systems", icon: <Database size={22} /> },
  { title: "IT Consulting", icon: <Briefcase size={22} /> },
];

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-white/10 sticky top-0 bg-black/90 backdrop-blur z-40">
      <h1 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Arc IT Solutions
      </h1>
      <div className="space-x-6 text-sm hidden md:flex text-gray-300">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/industries">Industries</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="px-6 md:px-16 py-24">
        <h2 className="text-4xl md:text-6xl font-light max-w-4xl leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Designing intelligent systems
          </span>
          <br />
          for a connected world.
        </h2>
        <p className="mt-6 text-gray-400 max-w-xl">
          We engineer digital products, AI platforms, and scalable systems.
        </p>
        <div className="mt-8">
          <Link to="/services">
            <Button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              Explore Services
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 md:px-16 py-16 border-t border-white/10 grid md:grid-cols-4 gap-8 text-center">
        {[
          { num: "50+", label: "Projects Delivered" },
          { num: "20+", label: "Global Clients" },
          { num: "10+", label: "Industries" },
          { num: "5+", label: "Years Experience" },
        ].map((item, i) => (
          <div key={i}>
            <h3 className="text-2xl text-white">{item.num}</h3>
            <p className="text-gray-400 text-sm">{item.label}</p>
          </div>
        ))}
      </section>

      {/* Featured Services */}
      <section className="px-6 md:px-16 py-20 border-t border-white/10">
        <h3 className="text-xl mb-10">Core Capabilities</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <div key={i} className="p-6 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition">
              <div className="text-blue-400 mb-3">{item.icon}</div>
              <h4 className="text-lg">{item.title}</h4>
              <p className="text-gray-400 text-sm mt-2">High-quality scalable solutions tailored for enterprise needs.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-16 py-20 border-t border-white/10 text-center">
        <h3 className="text-2xl mb-4">Ready to build your next big idea?</h3>
        <p className="text-gray-400 mb-6">Let’s create something impactful together.</p>
        <Link to="/contact">
          <Button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
            Get in Touch
          </Button>
        </Link>
      </section>
    </div>
  );
}

function Services() {
  return (
    <section className="px-6 md:px-16 py-20">
      <h3 className="text-xl mb-10">Capabilities</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-4 border border-white/10 rounded-lg bg-white/5">
            <div className="text-blue-400">{item.icon}</div>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="px-6 md:px-16 py-20">
      <h3 className="text-xl mb-10">Industries</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {["Automotive","Healthcare","Fintech","Retail","Media","Manufacturing"].map((item,i)=> (
          <div key={i} className="p-4 border border-white/10 rounded-lg bg-white/5">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="px-6 md:px-16 py-20">
      <h3 className="text-xl mb-4">About</h3>
      <p className="text-gray-400 max-w-2xl">
        Arc IT Solutions builds intelligent digital platforms combining design and engineering.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="px-6 md:px-16 py-20">
      <h3 className="text-xl mb-8">Contact</h3>
      <div className="grid md:grid-cols-3 gap-6 text-gray-400">
        <div><p>Email</p><p className="text-white">info@arcit.in</p></div>
        <div><p>Phone</p><p className="text-white">+91 9992340889</p></div>
        <div><p>Location</p><p className="text-white">Panipat, India</p></div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="px-6 md:px-16 py-6 border-t border-white/10 text-gray-500 text-sm">
          © {new Date().getFullYear()} Arc IT Solutions
        </footer>
      </div>
    </Router>
  );
}
