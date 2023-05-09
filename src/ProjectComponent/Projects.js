import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <div className='Project'>
            <h1 className='h1'><span>Projects / </span>Work Experience</h1>
            <div className='Projects_container'>
                <div className='Project1'>
                    <h1>Associate Software Developer</h1>
                    <h3>Netlink Digital Solutions (Part of Xebia)</h3>
                    <div className='year'>
                        <p>06/2022 - 01/2023</p>
                        <p>Chennai</p>
                    </div>
                    <ul className='work'>
                        <li>Handling both Client and Server side.</li>
                        <li>Working on critical bug fixes.</li>
                        <li>Experience in developing web reactive and mobile app in outsystems platform.</li>
                        <li>In-depth knowledge of Outsystems like Client Actions, Server Actions, Entites and API Integration.</li>
                        <li>Worked on Banking and Insurence Projects.</li>
                    </ul>
                </div>
                <div className='Project2'>
                <h1>Digital Executive</h1>
                    <h3>Newgen KnowledgeWorks Private Limited</h3>
                    <div className='year'>
                        <p>04/2021 - 06/2022</p>
                        <p>Chennai</p>
                    </div>
                    <ul className='work'>
                        <li>In-depth knowledge of front-end coding languages like HTML, CSS, JavaScript and Bootstrap.</li>
                        <li>Checking error and de-bugging websites with Dev tool.</li>
                        <li>Worked on the website called colourpencil.co. This website is used for Art and images Creations. It includes Art production, Art conversion,Art memento,Art resizing and creative ARTs. It can be accessed by everyone through website.</li>
                        <li>Created internal website to refer document, template like wiki in HTML platform. It can be accessed by everyone through website (Localhost).</li>
                        <li>Learned basic knowledge on React JS.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects
