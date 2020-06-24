import React, {Component} from 'react'
import Navbar from "./Navbar";
import Section from "./Section";
import AboutUs from "./Sections/AboutUs";
import Courses from "./Sections/Courses";
import Gallery from "./Sections/Gallery";
import Contact from "./Sections/Contact";
import Schedule from "./Sections/Schedule";

import Top from '../assets/images/top_1920x360.jpg';

export default class Home extends Component
{
    render()
    {
        const about = <AboutUs/>

        return(
            <div>
                <img src={Top} alt="" className="top-width"/>
                <div className="App">
                    <Navbar/>
                    <Section
                        sectionClass="section-1"
                        title="O Nas"
                        subtitle={about}
                        id="section1"/>
                    <Section
                        sectionClass="section-2"
                        title="Kursy"
                        subtitle={<Courses/>}
                        id="section2"/>
                    <Section
                        sectionClass="section-2"
                        title="Harmonogram"
                        subtitle={<Schedule/>}
                        id="section2"/>
                    <Section
                        sectionClass="section-2"
                        title="Galeria"
                        subtitle={<Gallery/>}
                        dark={false}
                        id="section3"/>
                    <Section
                        sectionClass="section-2"
                        title="Kontakt"
                        subtitle={<Contact/>}
                        id="section4"/>
                </div>
            </div>
        )
    }
}