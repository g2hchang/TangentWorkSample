import React from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'semantic-ui-react';
class Timeline extends React.Component{
    constructor(){
        super();
    }
    handleChange(event){
    }
    handleClick() {
    }
    render(){
        return(
        <div id="timeline_info">
            <div id="timeline_outer">
                <div className="container">
                    <div id="timeline_title">
                        <h2>Rollout timeline</h2>
                    </div>
                    <div className="row example-centered">
                        <ul className="timeline timeline-centered">
                            <li className="timeline-item period">
                                <div className="timeline-info"></div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h2 className="timeline-title">2014</h2>
                                </div>
                            </li>
                            <li className="timeline-item beam">
                                <div className="timeline-info">
                                    <span>November</span>
                                </div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h3 className="timeline-title">Beam Messenger Alpha</h3>
                                    <p> The first version of Beam Messenger launched <br/>on Android 
                                        and received global media coverage </p>
                                </div>
                            </li>
                            <li className="timeline-item period">
                                <div className="timeline-info"></div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h2 className="timeline-title">2015</h2>
                                </div>
                            </li>
                            <li className="timeline-item beam">
                                <div className="timeline-info">
                                    <span>June</span>
                                </div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h3 className="timeline-title">FCC Chairman’s award</h3>
                                    <p> Beam Messenger wins FCC award for being first<br/> 
                                        to demonstrate RTT in working capacity on mobile </p>
                                </div>
                            </li>
                            <li className="timeline-item nonbeam">
                                <div className="timeline-info">
                                    <span>July</span>
                                </div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <p> FCC issues RFC on petition to transition <br/>from TTY to Real-Time Text </p>
                                </div>
                            </li>
                            <li className="timeline-item period">
                                <div className="timeline-info"></div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h2 className="timeline-title">2016</h2>
                                </div>
                            </li>
                            <li className="timeline-item beam">
                                <div className="timeline-info">
                                    <span>April</span>
                                </div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h3 className="timeline-title">Beam Call</h3>
                                    <p> Beam begins working on merging voice calls with RTT  <br/>
                                        chat interface, creating first Multiformat 
                                        Communications <br/> platform </p>
                                </div>
                            </li>
                            <li className="timeline-item nonbeam">
                                <div className="timeline-info">
                                    <span>December</span>
                                </div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <p> FCC issues final rulemaking setting timeline for RTT rollout </p>
                                </div>
                            </li>
                            <li className="timeline-item period">
                                <div className="timeline-info"></div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h2 className="timeline-title">2017</h2>
                                </div>
                            </li>
                            <li className="timeline-item beam">
                                <div className="timeline-info">
                                    <span>December</span>
                                </div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h3 className="timeline-title">Deploying with Canada </h3>
                                    <p> Through BCIP government procurement
                                    program, Beam gets approval for a pilot with Deparment of National Defence </p>
                                </div>
                            </li>
    
                            <li className="timeline-item nonbeam">
                                <div className="timeline-info">
                                    <span>December</span>
                                </div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <p>Tier 1 US Telecoms adhering to FCC must begin offering RTT enabled devices</p>
                                </div>
                            </li>
                            <li className="timeline-item period">
                                <div className="timeline-info"></div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h2 className="timeline-title">2018</h2>
                                </div>
                            </li>
        
    
                            <li className="timeline-item nonbeam">
                                <div className="timeline-info">
                                    <span>May</span>
                                </div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <p>General Data Protection Regulation (GDPR) 
                                    instates corporate accountability, and demands 
                                    that global users can access their own data </p>
                                </div>
                            </li>
                            <li className="timeline-item beam">
                                <div className="timeline-info">
                                    <span>September</span>
                                </div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h3 className="timeline-title"> Beam Platform Beta </h3>
                                    <p> Opening up Beam Platform for early signups, 
                                    offering first users and devs new multiformat
                                    communications and data gathering tools </p>
                                </div>
                            </li>
                            <li className="timeline-item nonbeam">
                                <div className="timeline-info">
                                    <span>December</span>
                                </div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <p> Phone Manufacturers / OEMs must support RTT on all new devices  </p>
                                </div>
                            </li>
                            <li className="timeline-item period">
                                <div className="timeline-info"></div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h2 className="timeline-title">2019</h2>
                                </div>
                            </li>
                            <li className="timeline-item nonbeam">
                                <div className="timeline-info">
                                    <span>December</span>
                                </div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <p> Tier 2,3 Telecoms must supply all new customers with RTT services and devices </p>
                                </div>
                            </li>
                            <li className="timeline-item period">
                                <div className="timeline-info"></div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h2 className="timeline-title">2020</h2>
                                </div>
                            </li>
                            <li className="timeline-item beam">
                                <div className="timeline-info">
                                    <span></span>
                                </div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h3 className="timeline-title">AI takes over</h3>
                                    <p>We are living with digital agents inside every call, early “SAM”, 
                                        seamlessly incorporating our speech into notes, calendars and beyond. Here it starts to get good </p>
                                </div>
                            </li>
                        </ul>
                    </div>
           
                </div>
            </div>
        </div>
        )
    }
}

export default Timeline;