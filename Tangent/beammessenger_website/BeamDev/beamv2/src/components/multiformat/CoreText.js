import React from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'semantic-ui-react';
import img1 from '../../images/page2/realtimetext-01.svg';
import img2 from '../../images/page2/groupRTT.svg';
import img3 from '../../images/page2/switch.svg';
import img4 from '../../images/page2/retract.svg';
import img5 from '../../images/page2/Notification-01.svg';
import img6 from '../../images/page2/RTTmetadata.svg';
import img7 from '../../images/page2/real-timechatbot.svg';
import img8 from '../../images/page2/Superior.svg';

class CoreText extends React.Component{
    constructor(){
        super();
    }
    handleChange(event){
    }
    handleClick() {
    }
    render(){
        return(
        <div id="coretext_info">
            <div className="container">
                <div className="core_title">
                    <h2>Core Features (Text)</h2>
                </div>
                <div className="boxes_v4">
                    <div className="boxes_v4_row">
                        <div className="box_v4">
                            <Image className="coretext_icon" src={img1}></Image>
                            <p>
                            Real-Time Text (RTT) Chat
                            </p>
                        </div>
                        <div className="box_v4">
                            <Image className="coretext_icon" src={img2}></Image>
                            <p>
                            Group RTT chat
                            </p>
                        </div>
                        <div className="box_v4">
                            <Image className="coretext_icon" src={img3}></Image>
                            <p>
                            Switch between turn- based and real-time
                            </p>
                        </div>
                        <div className="box_v4">
                            <Image className="coretext_icon" src={img4}></Image>
                            <p>
                            Retract messages
                            </p>
                        </div>
                    </div>
                    <div className="boxes_v4_row">
                        <div className="box_v4">
                            <Image className="coretext_icon" src={img5}></Image>
                            <p>
                            Notification on “Started typing”
                            </p>
                        </div>
                        <div className="box_v4">
                            <Image className="coretext_icon" src={img6}></Image>
                            <p>
                            RTT metadata for keystroke biometrics
                            </p>
                        </div>
                        <div className="box_v4">
                            <Image className="coretext_icon" src={img7}></Image>
                            <p>
                            Real-Time chatbot support
                            </p>
                        </div>
                        <div className="box_v4">
                            <Image className="coretext_icon" src={img8}></Image>
                            <p>
                            Superior real-time <br/>packet transfer security
                            </p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        )
    }
}

export default CoreText;