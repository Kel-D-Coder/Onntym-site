<<<<<<< HEAD
import { useEffect } from 'react';
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer';
import { Agents } from '../components/Agents'
=======
import React, { useEffect } from 'react';
import { Agents } from '../components/Agents';
>>>>>>> ad491171283d74d4e43e10fb30355c8e93b3b388
import { otherServices, varieties } from '../Data'
import LandingImg from '../imgs/landing-pic.jpg'
import '../styles/Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
<<<<<<< HEAD
=======
import Navbar from '../components/Navbar';
>>>>>>> ad491171283d74d4e43e10fb30355c8e93b3b388

export const Home = () => {
    useEffect(() => {
        AOS.init({
            once: true
        });
    }, [])
<<<<<<< HEAD
    
    return (
        <>
            <Navbar />
=======
    return (
        <React.Fragment>
                <Navbar/>
>>>>>>> ad491171283d74d4e43e10fb30355c8e93b3b388
            <div className='landing_container'>
                <img src={LandingImg} alt="" className='landing-img' />
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
            
            <div className="other_services">
                <span>Other</span>
                <h2>Delivering Services</h2>
                <div className="services" data-aos="fade-up" data-aos-delay="500">
                    {
                        otherServices.map(service => (
                            <div className="service" key={service.id}>
                                <img src={service.image} alt={service.name} />
                                <h3 className="service_text">{service.name}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
<<<<<<< HEAD
            <br />
            <Footer />
        </>
=======
        </React.Fragment>
>>>>>>> ad491171283d74d4e43e10fb30355c8e93b3b388
    )
}