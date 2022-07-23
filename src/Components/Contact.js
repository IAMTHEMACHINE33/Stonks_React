import React from "react";

const Contact = ()=>{
    return(
        <div id="contact">
            <h3>Send Me Mail</h3>
            <div className="contact-input">
                <input type='email' placeholder='example@gmail.com'/>
                <a href="#">Contact</a>
            </div>
        </div>
    );
}

export default Contact;