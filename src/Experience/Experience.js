import React from 'react';
import './Experience.css';
import { Link } from 'react-router-dom';

function Experience() {
    return (
        <>
        <h1 className="title">Education and work experience</h1>
        <div className="experience-container">
            <div className="square">
                <div className="text-area">
                    <h3>Turing School of Software and Web Design</h3>
                    <p>Nationally accredited 2100+ hours intensive fully immersive bootcamp revolving around multiple group, paired, and solo projects to gain experience in various environments</p>   
                </div>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Agile Workflow</li>
                </ul>
                <ul>
                    <li>Git</li>
                    <li>Responsive Design</li>
                    <li>Test Driven Design</li>
                </ul>
            </div>
            <div className="square">
                <h3>Quality Assurance for group homes</h3>
                <p className="text">Responsible for ensuring that facilities were in compliance with corporate and State regulations. Create corrective action plans when deficiencies were noted. Create or update corporate policies as needed. 
                </p>
            </div>
            <div className="square">   
                <h3>Group Home Manager</h3>
                <p className="text">Supervise a team of 8 - 10 Care Providers. Responsible for oversight and training in all aspects of client care. Point of contact for client Guardians. Responsible for creation and implementation of Behavior Treatment Plans.</p>
            </div>
            <div className="square">
                <h3>Trainer for Disability Rights in Arizona</h3>
                <p className="text">Certified Trainer in Arizona's Article 9, which is a required course for all care providers defining the legal rights of people with disabilities. I was also certified to train in Prevention and Support, which teaches communication techniques and empathy as well as de-escalation and crisis intervention techniques. </p>
            </div>
            <div className="square">
                <h3>Proofreader</h3>
                <p className="text">I worked as a Proofreader and Copy Editor for a small publishing house. I was responsible for finding spelling, punctuation and grammatical errors, as well as syntatic issues that might confuse the reader or interfere with the story.</p>
            </div>
        </div>
         <div className="button-container">
            <Link to='/'><button className="experience-button">Return to Main Page</button></Link>
        </div>
        </>
    )
}

export default Experience;