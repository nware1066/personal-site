import React from 'react';
import './Projects.css';
import bibliogoal from '../assets/bibliogoal.png';
import pokeTeam from '../assets/pokeTeam.png';
import romCom from '../assets/romCom.png';

function Projects() {
    return(
        <>
        <h1 className="project-h1">Projects</h1>
        <section className="projects-container">
            <div className="squares-wrapper">
                <section className="project-square">
                        <img src={romCom} className="square-pic" alt=''/>
                    <a className="project-link" href="https://github.com/nware1066/romcom">
                        <div className="project-text-area">   
                            <h3>RomCom</h3>
                            <p className="project-text">RomCom was built in vanilla JavaScript as a paired project. The app displays a randomly generated novel cover, and the user can generate a new cover, save a cover to favorites and view thier favorites.</p>
                            <p>Click here to view the code for RomCom</p>
                        </div>
                    </a>
                </section>
                <section className="project-square">
                    <a className="project-link" href="https://github.com/aemcdonald/bibliogoal">
                        <div className="project-text-area">   
                            <h3>BiblioGoal</h3>
                            <p className="project-text">BiblioGoal was a team project built using React and using Redux for state management. The app allows a user to set a reading goal, select books to read and then track progress towards the goal.</p>
                            <p>Click here to view the code for BiblioGoal</p>
                        </div>
                    </a>
                    <img src={bibliogoal} className="square-pic" alt=''/>
                </section>
                <section className="project-square">
                    <img src={pokeTeam} className="square-pic" alt=''/>
                    <div className="project-text-area">   
                        <a className="project-link" href="https://github.com/jordy1611/PokeTeam">
                            <h3>PokeTeam</h3>
                            <p className="project-text">PokeTeam was a group project built with React, which allows a user to log in from their Google account using OAuth and then build a team of Pokemon. Learning to implement OAuth was a primary focus of the project.</p>
                            <p>Click here to view the code for PokeTeam</p>
                        </a> 
                    </div>
                </section>
            </div>
        </section>
        </>
    )
}

export default Projects;