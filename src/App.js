import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Topbar from './components/topbar/Topbar';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Achievements from './components/achievements/Achievements';

function App() {

  useEffect(() => {
    Aos.init({duration: 2000});
  },[])

  return (
    <>
      <Topbar/>
      <About />
      <Skills/>
      <Projects />
      <Achievements/>
      <hr style={{"height":"100px", "backgroundColor":"gray"}} />
    </>
  );
}

export default App;
