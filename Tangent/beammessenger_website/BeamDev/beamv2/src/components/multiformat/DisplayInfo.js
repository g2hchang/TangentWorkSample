import React from 'react';
import ReactDOM from 'react-dom';
import gifImage from '../../images/page1/hero_image.gif';
import {Image} from 'semantic-ui-react';
import img1 from '../../images/page2/B-P1-01.png';
class DisplayInfo extends React.Component{

    render(){
        return(
        <div className="outerForm">
            <div className="formSubmit">
                <div className="container_v2">
                    <h1>One SDK to rule them all</h1>
                    
                </div>
                <div className="container">
                    <p className="beamParagraph">A synchronized phonecall + chat transcription SDK that allows you
                    to bring true Multiformat capabilities into your mobile app or website.</p>
                    <Image src={img1} className="page2img"></Image>
                </div>
            </div>
        </div>
        )
    }
}

export default DisplayInfo;