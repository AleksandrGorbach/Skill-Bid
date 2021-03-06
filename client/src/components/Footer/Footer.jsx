import React from "react"
import "./Footer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div className="footer">
            <h1 className="footer-h1">Skill<span>Bid</span></h1>
        <h5 className="created">Created By:</h5>

            <p>Ryan Lee</p> 
            <a rel="noreferrer" href="https://github.com/ryanslee91" target="_blank">
            <FontAwesomeIcon icon={faGithub} id="git" />
            </a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/sang-hyun-ryan-lee-801394a5/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} id="link" />
            </a>
            <p>Cameron Izadi</p> 
            <a rel="noreferrer" href="https://github.com/CameronIzadi" target="_blank">
            <FontAwesomeIcon icon={faGithub} id="git" />
            </a>
            <a rel="noreferrer" href="https://www.linkedin.com" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} id="link" />
            </a>
            <p>Gabriel Deleon</p> 
            <a rel="noreferrer" href="https://github.com/Deleon06" target="_blank">
            <FontAwesomeIcon icon={faGithub} id="git" />
            </a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/gabrieldeleon06/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} id="link" />
            </a>
            <p>Aleksandr Gorbach</p> 
            <a rel="noreferrer" href="https://github.com/AleksandrGorbach" target="_blank">
            <FontAwesomeIcon icon={faGithub} id="git" />
            </a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/aleksandr-gorbach-85a314154/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} id="link" />
            </a>
        </div>
    )
}
