import React from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'semantic-ui-react';
import img1 from '../../images/page3/FCC logo-01.svg';
class AwardInfo extends React.Component{
    constructor(){
        super();
    }
    handleChange(event){
    }
    handleClick() {
    }
    render(){
        return(
        <div id="award_info">
            <div id="awardinfo_outer">
                <div className="container">
                    <div id="awardinfo_row1">
                        <div className="awardinfo_col1">
                            <Image className="FCC_logo" src={img1}></Image>
                        </div>
                        <div className="awardinfo_col2">
                            <div id="awardinfo_col2_title">
                                <h2>Beam Messenger</h2>
                                <h1>WINNER 2015 <br/>  FCC Chairman’s Award</h1>
                            </div>
                        </div>
                    </div>
                    <div id="awardinfo_row2">
                        <div id="awardinfo_desc">
                            <p>
                            Beam is compatible with the new FCC standard for Real-Time Text, based on IETF RFC 4103 recommendation. For OEMs and Telcos we offer a whitelabeled version of the RTT Messenger, for rapid deployment and compliance. 
                            <br/><br/>
                            If you would like to inquire about our RTT solution, please email
                            us your information below and we will get in touch asap.
                            {/*If you would like to inquire about our FCC compliant RTT solution, please leave<br/>
                            us your information below and we will get in touch asap*/}
                            </p>
                        </div>
                        <div id="awardinfo_btn">
                            <div>
                                <a target="_top" href="mailto:team@beamplatform.com?subject=RTT%20Regulation%20inquiry">
                                    Request Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default AwardInfo;