import React from 'react';
import img1 from '../../images/page1/messages.svg';
import img2 from '../../images/page1/searching.svg';
import img3 from '../../images/page1/science.svg';

class InfoSection extends React.Component{

    render(){
        return(
        <div id="infoSect">
            <h2>A new way to solve old problems</h2>
            <div className="container">
                <p className="beamParagraph">
                Beam Platform creates a new environment where you are seamlessly connected 
                with your team and peers, rapidly switching between text and voice communications, uninterrupted
                </p>
                <div className="boxes_v2">
                    <div className="box_v2">
                        <img src={img1}></img>
                        <h4>Text & voice are siloed</h4>
                        <p>
                        We communicate through text, calls and video, yet the information disclosed 
                        in one is not incorporated in the other.
                        </p>
                    </div>
                    <div className="box_v2">
                        <img src={img2}></img>
                        <h4>Phone calls are not “searchable”</h4>
                        <p>
                        Call logs are preserved in formats inaccessible to quick search and retrieval. 
                        Beam puts everything in the palm of your hand.
                        </p>
                    </div>
                    <div className="box_v2">
                        <img src={img3}></img>
                        <h4>Both sides can access data</h4>
                        <p>
                        Historically, only businesses kept the recordings, for quality purposes. And now you too can have access to the conversation.
                        Own it, use it.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default InfoSection;