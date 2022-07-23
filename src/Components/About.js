import React from "react";


const About = (props) => {
    return(
        <div id="about">
            <div className="about-image">
                <img src={props.image} alt=""/>
            </div>
            <div className="about-text">
                <h2>{props.title}</h2>
                <p>lorem</p>
                <button>{props.button}</button>
            </div>
        </div>
    )
};
export default About;