import React from 'react';
import file1 from '../../docs/doc-1.pdf';
class DisplayStandardInfo extends React.Component{

    render(){
        return(
        <div className="outerForm">
            <div className="formSubmit">
                <div className="container_v2">
                    <h1>Real-Time Text (RTT) is the new standard</h1>
                </div>
                <div className="container">
                    <p className="beamParagraph">
                    On December 15, 2016, FCC passed regulation transitioning phone companies towards implementing Real-Time Text (RTT) software on all phones, as first demonstrated by Beam Messenger, replacing an outdated form of real-time text communications known as TTY. This shift is happening over the next few years, with Tier 1 Carriers being the first to adopt RTT starting 2018, followed by Tier 2 and 3. For
                    the average user, this simply means that your smartphone will now have an extra app or feature, with deeper OS level integration to follow.
                    </p>
                    <div id="fcc_btn">
                        <a target="_blank" rel="noopener noreferrer"  href={file1}>
                            Read FCC Release
                        </a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default DisplayStandardInfo;