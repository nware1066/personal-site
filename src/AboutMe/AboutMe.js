import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';
import profile from '../assets/profile.jpg';


function AboutMe() {
    return (
        <section className="about-me-wrapper">
            <div className="text-container">    
                <img src={profile} className="profile-pic" alt=""/>
            <div className="about-me-text">
                <h3>About Me</h3>
                <p>I am a front end developer who was trained at the Nationally Accredited Turing School of Software and Web Design.</p>
                <p>I enjoy working in small groups that value creativity. I am a good communicator who enjoys any challenge that I can learn from. When I am not working, I like hiking with my dog, trying out new recipes and travelling</p>
            </div>
            </div>
            <div className="personal-info">
                <h3>Personal info:</h3>
                <p>Phone: 520 358 6345</p>
                <p><a className="link" href="mailto:nware1066@gmail.com">Send an email</a></p>
                    <a className="link" href="https://www.linkedin.com/in/naomi-ware-083332b8/">LinkedIn</a>
                    <a className="link" href="https://github.com/nware1066" >Github</a>
            </div>
            <div className="button-container">
                <Link to='/experience'><button className="button">View Work Experience</button></Link>
            </div>
        </section>
    )
}

export default AboutMe;