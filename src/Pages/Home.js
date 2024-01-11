import React, { useEffect } from 'react';
import { Agents } from '../components/Agents';
import { varieties } from '../Data'
import { OtherServices } from '../components/OtherServices';
import Footer from '../components/Footer'
import LandingImg from '../imgs/landing-pic.jpg'
import phoneLandingPic from '../imgs/phone_landing_pic.jpg'
import '../styles/Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';

export const Home = () => {
    useEffect(() => {
        AOS.init({
            once: true
        });
    }, [])

    return (
        <React.Fragment>
                <Navbar/>
            <div className='landing_container'>
                <img src={LandingImg} alt="" className='landing-img' />
                <img src={phoneLandingPic} alt="" className='phone-landing-img' />
                <div className="overlay"></div>
                <div className="landing_text" data-aos="fade-up" data-aos-delay="500">
                    <span className='landing_text_1'>ONNTYM</span>
                    <h1 className='landing_text_2'>FAST & RELIABLE</h1>
                </div>
                <hr />
                <div className="variety">
                    {
                        varieties.map(variety => {
                            return (
                                <div key={variety.id} className='variety_container' data-aos="fade-up" data-aos-delay="1000">
                                    <img src={variety.image} alt={variety.name} className="variety_pic" />
                                    <h3 className="variety_text">{variety.name}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <Agents />
            
            <OtherServices />
            
            <Footer />
        </React.Fragment>
    )
}