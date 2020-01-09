import React from 'react';
import ReactDOM from 'react-dom';
import gifImage from '../../images/page1/hero_image.gif';
import RegisterForm from './RegisterForm';
class Submission extends React.Component{

    render(){
        return(
        <div className="outerForm">
            <div className="formSubmit">
                <div className="container">
                    <h2 id="formTitle">Introducing <span>BeamCall</span></h2>
                    <h1 id="formPargarph">The first <b>Multiformat<br/> Communications</b> &trade; platform</h1>
                </div>
                <div className="container_v2">
                    <div id="box1">
                        <img src={gifImage}></img>
                    </div>
                    <div id="box2">
                        <RegisterForm/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Submission;