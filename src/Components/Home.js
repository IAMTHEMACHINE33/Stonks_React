import React from 'react';
import Header from "./Header";
import Feature from "./Feature";
import About from './About';
import Presentation from './Presentation';
import aboutimage from '../images/Frame 19.png';
import aboutimage1 from '../images/download.png';
import Contact from './Contact';

const Home = () => {
    return(
        <div className="App">
            <Header/>
            <Feature/>
            <About image={aboutimage} title='Comes With All You Need For Daily Life' button='Get The App'/>
            <Presentation/>
            <About image={aboutimage1} title='Download And Get The App now' button='Download'/>
            <Contact/>
        </div>
    )
};
export default Home;