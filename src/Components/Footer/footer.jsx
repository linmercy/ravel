import React, {useEffect} from 'react'
import './footer.css'
// video
import video from '../Home/video.mp4'
//icons
import { SiFacebook, SiInstacart, SiInstagram, SiTwitter, SiYourtraveldottv } from 'react-icons/si'
import { FiChevronRight, FiSend } from 'react-icons/fi'
//animations
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    //add scroll animation
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    return (
        <section className='footer' >
            <div className="videoDiv">
                <video src={video} loop autoPlay muted typeof='video/mp4'></video>
            </div>

            <div className="secCont container">
                <div data-aos="fade-up" className="contactDiv flex">
                    <div className="text">
                        <small>Get In Touch</small>
                        <h2>Travel With Us</h2>
                    </div>

                    <div className="input flex">
                        <input type="text" placeholder='Enter Email...' />
                        <button className='btn flex' type='submit'>
                            SEND<FiSend className='icon'/>
                        </button>
                    </div>
                </div>

                <div data-aos="fade-up" className="card flex">
                    <div className="intro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'>
                                <SiYourtraveldottv className='icon'/>
                                Travel.
                            </a>
                        </div>

                        <div className="paragraph flex">
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Fuga, deleniti nulla sint
                            aspernatur aut sapiente qui accusamus sunt 
                            vitae totam illo quis saepe dicta, animi at est 
                            dignissimos odio harum!
                        </div>

                        <div className="socials flex">
                            <SiTwitter className='icon'/>
                            <SiFacebook className='icon'/>
                            <SiInstagram className='icon'/>
                        </div>
                    </div>

                    <div className="links grid">
                        <div className="linkGroup">
                            <span className='groupTitle'>
                                OUR AGENCY
                            </span>

                            <li className="list flex">
                                <FiChevronRight className='icon'/>
                                Agency
                            </li>

                            <li className="list flex">
                                <FiChevronRight className='icon'/>
                                Services
                            </li>

                            <li className="list flex">
                                <FiChevronRight className='icon'/>
                                Payment
                            </li>

                            <li className="list flex">
                                <FiChevronRight className='icon'/>
                                Insurance
                            </li>
                        </div>

                        <div className="linkGroup">
                            <span className='groupTitle'>
                                PARTNERS
                            </span>

                            <li className="list flex">
                                <FiChevronRight className='icon'/>
                                Bookings
                            </li>

                            <li className="list flex">
                                <FiChevronRight className='icon'/>
                                Rentcars
                            </li>

                            <li className="list flex">
                                <FiChevronRight className='icon'/>
                                Airbnbs
                            </li>

                            <li className="list flex">
                                <FiChevronRight className='icon'/>
                                Eateries
                            </li>
                        </div>
                    </div>

                    
                </div>

                <div  className="footerDiv flex">
                    <p>Travel. All rights reserved &copy; 2023. -LynnTech</p>
                </div>
            </div>

        </section>
    )
}

export default Footer