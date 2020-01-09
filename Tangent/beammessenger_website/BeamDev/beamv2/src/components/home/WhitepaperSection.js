import React from 'react';
import file1 from '../../docs/doc-2.pdf';

class WhitepaperSection extends React.Component{

    render(){
        return(
        <div className="whiteOuter">
            <div className="whiteBox"> 
                <div className="container">
                    <h2>On Multiformat Communications...</h2>
                    <p className="m-paragraph">
                    The following whitepaper presents the technology framework that is “Multiformat Communications”, and how it fits 
                    within the current methods. As global telecommunications providers prepare to roll out 5G networking, the Beam 
                    Platform presents an opportunity to tap into that power, storing all your interactions in the cloud with lightning 
                    fast access straight from the palm of your hand. As phone calls remain the last medium of communications yet to be 
                    fully digitized, this new paradigm offers up a way to unify and converge our conversation data across all real-time 
                    channels into a single multiformat interface.
                    </p>
                </div>
                <div id="whitepaper_btn">
                    <a target="_blank" rel="noopener noreferrer" href={file1}>
                        READ WHITEPAPER
                    </a>                 
                </div>
            </div>
            {/*<div className="whitepaperSect">
            </div> */ }
        </div>
        )
    }
}

export default WhitepaperSection;