import "./App.css";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Experience from "./components/Experience/experience";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Nav from './components/Nav/nav';
import Portfoglio from "./components/Portfoglio/portfoglio";

function App() {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfoglio />
        <Contact />
        <Footer />
    </>
  );
}

export default App;
