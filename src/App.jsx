import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import TeamSection from './components/TeamSection'
import Awards from './components/Awards'
import FAQSection from './components/FAQSection'
import Portfolio from './components/Portfolio'
import Expertise from './components/Expertise'
import FunFacts from './components/FunFacts'
import HappyUsers from './components/HappyUsers'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import BlogSection from './components/BlogSection'
import FooterSection from './components/FooterSection'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20 bg-gray-100">

        {/* Normal scroll sections */}
        <Banner />
        <About />
        <Portfolio />
        <div className="relative">
          <div className="sticky top-0 z-0">
            <Expertise />
          </div>
          <div className="relative z-10">
            <FunFacts />
            <HappyUsers />
            <Testimonials />
            <Contact />
            <Awards />
            <TeamSection />
            <FAQSection />
            <BlogSection />
            <FooterSection />
          </div>
        </div>

      </main>
    </div>
  )
}

export default App
