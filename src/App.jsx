import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Expertise from './components/Expertise'
import FunFacts from './components/FunFacts'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20 bg-gray-100">
        <Banner />
        <About />
        <Portfolio />
        <Expertise />
        <FunFacts />
      </main>
    </div>
  )
}

export default App
