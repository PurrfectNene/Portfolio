import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import ProjectCards from "./components/ProjectCards";

function App() {

  return (
    <>

    <div>

    </div>
<div>
        <Introduction />
      </div>

      <div>
        <ProjectCards/>
      </div>

      <div>
        <ContactForm/>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
