import React from 'react';
import img1 from '../../images/page2/Export.svg';
import img2 from '../../images/page2/compass.svg';
import img3 from '../../images/page2/blackboard.svg';

class MultiInfoSection extends React.Component{

    render(){
        return(
        <div id="multiinfoSect">
            <h2>Unified Solution</h2>
            <div className="container">
                <p className="beamParagraph">
                Beam's SDK is a one-stop solution, providing you the tools to initialize and configure Voice+Text from the client side, with a simplified
                backend. Available with Mobile and Web (JavaScript) integrations. We offer the single most convenient<br/>
                communications solution for your every need.
                </p>
                <div className="boxes_v2">
                    <div className="box_v2">
                        <img src={img1}></img>
                        <h4>Export .beam Multiformat file</h4>
                        <p>
                        Compact, single file format optimized for sharing
                        </p>
                    </div>
                    <div className="box_v2">
                        <img src={img2}></img>
                        <h4>Real-Time Text search & analytics</h4>
                        <p>
                        Gain immediate insights; steer conversation to A or B
                        </p>
                    </div>
                    <div className="box_v2">
                        <img src={img3}></img>
                        <h4>Share real-time feeds to groups</h4>
                        <p>
                        Allow users access to real-time calls, without disruption
                        </p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default MultiInfoSection;