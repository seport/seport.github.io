import React from 'react';
import Header from './components/Header';
import Hero from './pages/Hero';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';

const App = () => <div>
    <Hero />
    <Header />
    <Skills />
    <Blogs />
    <Projects />
    <Contact />
</div>;

export default App;