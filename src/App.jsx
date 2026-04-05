import Navbar from './components/Navbar'
import Banner from './components/Banner'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20">
        <Banner />
      </main>
    </div>
  )
}

export default App
