
import './App.css';
// import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Navbar } from './Components/Navbar/Navbar';
import { Project } from './Components/Project';
import { TechStack } from './Components/TechStack';
import { Skills } from './Components/Skills';
import { Contacts } from './Components/Contacts';
import { Statistics } from './Components/Statistics';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Project />
      <TechStack />
      <Skills />
      <Statistics />
      <Contacts />

    </div>
  );
}

export default App;
