//Import style sheet
import './App.css';

//Import components 
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body'
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />  
      <Body />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
