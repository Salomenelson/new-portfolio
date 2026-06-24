import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Tech from './components/Tech.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Mealmate from './components/Casestudies/Mealmate.jsx'
import WhatsApp from './components/Casestudies/WhatsApp.jsx';
import Jiji from './components/Casestudies/Jiji.jsx';



function App() {

  const { hash } = useLocation();
  useEffect(() =>{
    if (hash) {
      // Finding the element matching the URL hash (e.g., #Project)
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        // Making it scroll smoothly to it after a tiny delay so the DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); 
      }
    }
  }, [hash]);

  return (
    <Routes>
      <Route path ="/" element={
        <>
          <Header/>
          <Hero/>
          <About/>
          <Tech/>
          <Project/>
          <Contact/>
          <Footer/>
         </>
        } />
      <Route path='/Casestudies/Mealmate' element={<Mealmate />}/>
      <Route path='/Casestudies/WhatsApp' element={<WhatsApp />}/>
      <Route path='/Casestudies/Jiji' element={<Jiji />}/>
    </Routes>
  )
}

export default App
