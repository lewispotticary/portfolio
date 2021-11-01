//Import style sheet
import './App.css';

//Import components 
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body'
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Body />
      <Contact />
    </div>
  );
}

export default App;
