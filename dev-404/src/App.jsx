import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <h1>¡Bienvenido a la aplicación!</h1>
        <p>Has hecho clic {count} veces</p>
        <button onClick={() => setCount(count + 1)}>Haz clic en mí</button>
      </main>
      <Footer />
      
    </>
  )
}

export default App
