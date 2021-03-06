import React, { Component } from 'react';
import '../styling/globals.scss';
import '../styling/intro.scss';
import '../styling/mixins.scss';
import Hero from '../images/image-mockups.png';
// import Hero_Mobile from '../images/image-mockups-mobile.png';

class Intro extends Component {
    render() { 
        return (  
            <section id="intro">
                <div id="intro-text" className="p-l">
                    <h1>Next generation digial banking</h1>
                    <p> Take your financial life online. Your Easybank account will be a one-stop-shop 
                        for spending, saving, budgeting, investing, and much more.</p>
                    <button className="btn" id="intro-text-btn">Request Invite</button>
                    {/* <div className="">
                        <h1>Next generation digial banking</h1>
                    </div>
                    <div className="">
                        <p> Take your financial life online. Your Easybank account will be a one-stop-shop 
                        for spending, saving, budgeting, investing, and much more.</p>
                    </div>
                    <div id="btn-container" className="">
                        <button className="btn" id="hero-btn">Request Invite</button>
                    </div> */}
                </div>
                <div id="intro-image">
                    <img src={Hero} alt="Hero" id="intro-image-desktop"/>
                    <img src={Hero} alt="Hero_mobile" id="intro-image-mobile"/>
                </div>
            </section>
        );
    }
}
 
export default Intro;