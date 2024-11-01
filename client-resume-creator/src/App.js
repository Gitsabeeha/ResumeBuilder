

import './App.css';
import { BrowserRouter as  Router, Routes,Route } from 'react-router-dom';
import Education from './Component/Education';
import Experience from './Component/Experience';
import Skill from './Component/Skill';
import Interest from './Component/Interest';
import Project from './Component/Project';
import Objective from './Component/Objective'
import Achievement from './Component/Achievement'
import Activities from './Component/Activities'
import HeroSection from './Component/HeroSection';
import Navbar from './Component/Navbar';
import PersonalDetail from './Component/PersonalDetail';
import ResumeForm from './Component/ResumeForm';
import Publication from './Component/Publication';
import Language from './Component/Language';
import AdditionalInfo from './Component/AdditionalInfo';
import Footer from './Component/Footer'
import ExampleTemplate from './Component/Templatess/ExampleTemplate';
import Theme1 from './Component/Templatess/Theme1';
import Theme2 from './Component/Templatess/Theme2';
import ObjectiveExample from './Component/ObjectiveExample';






function App() {
  return (
    
 
      <Router>
   <Navbar/>

    <Routes>
        <Route path="/" element={<HeroSection />} /> 
        <Route path='/ResumeForm' element={<ResumeForm/>}/>
        <Route path='/PersonalDetail' element={<PersonalDetail/>}/>
        <Route path='/Education' element={<Education/>}/>
        <Route path='/Experience' element={<Experience/>}/>
        <Route path='/Skill' element={<Skill/>}/>
        <Route path='/Objective' element={<Objective/>}/>
        <Route path='/Project' element={<Project/>}/>
        <Route path='/Achievement' element={<Achievement/>}/>
        {/* <Route path='/Activity' element={<Activities/>}/> */}
        {/* <Route path='/Interest' element={<Interest/>}/> */}
        {/* <Route path='/Publication' element={<Publication/>}/> */}
        <Route path='/Languages' element={<Language/>}/>
        <Route path='/AdditionalInfo' element={<AdditionalInfo/>}/>
        <Route path='/TempletExample' element={<ExampleTemplate/>}/>
        <Route path='/Theme1' element={<Theme1/>}/>
        <Route path='/Theme2' element={<Theme2/>}/>
        <Route path='/ObjectiveExample' element={<ObjectiveExample/>}/>
     

        
   </Routes>
   {/* <Footer/> */}
   </Router>

  );
}

export default App;
