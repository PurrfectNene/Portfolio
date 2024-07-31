import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

function App() {
  

  return (
    <>
    <div>
    <Navbar/>
    </div>

    <div>
    <Introduction/>
    </div>

    <div className="App">
      <h1>Contact me:</h1>
      <ContactForm />
    </div>

    <div>
      <Footer/>
    </div>
    </>
  )
}

export default App
