import React from 'react';
import Header from '../../components/Header';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Extracurricular from './Extracurricular';
import Contact from './Contact';
import Footer from './Footer';
import LeftSider from './leftSider';
import RightSider from './rightSider';
import Skills from './Skills';
import Certifications from './Certifications';

function Home() {
  return (
    <div>
        <Header />
        <div className='container bg-primary mx-auto w-40% px-40 sm:px-5 py-10'>
            <Intro/>
            <About id="about"/>
            <Skills />
            <Projects id="projects"/>
            <Certifications />
            <Extracurricular id="extracurricular"/>
            <Contact id="contact"/>
            <Footer/>
            <LeftSider/>
            <RightSider/>
        </div>
    </div>
  );
}

export default Home;