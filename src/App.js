import React from 'react';
import Header from './HeaderComponent/Header.js';
import About from './AboutComponent/About.js';
import Skill from './SkillComponent/Skill.js';
import Projects from './ProjectComponent/Projects.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Skill/>
      <Projects/>
    </div>
  );
}

export default App;
