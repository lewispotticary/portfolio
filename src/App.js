//Import style sheet
import './App.css';

//Import components 
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Body />
    </div>
  );
}

export default App;
