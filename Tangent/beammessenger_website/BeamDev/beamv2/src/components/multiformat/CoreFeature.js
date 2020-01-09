import React from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'semantic-ui-react';
import img1 from '../../images/page2/1on1.svg';
import img2 from '../../images/page2/groupmulti.svg';
import img3 from '../../images/page2/runtextqueries.svg';
import img4 from '../../images/page2/export2.svg';
import img5 from '../../images/page2/sharerealtime.svg';
import img6 from '../../images/page2/oneside text.svg';

class CoreFeature extends React.Component{
    constructor(){
        super();
    }
    handleChange(event){
    }
    handleClick() {
    }
    render(){
        return(
        <div id="corefeature_info">
            <div id="corefeature_outer">
                <div className="container">
                    <div className="core_title">
                        <h2>Core Features (Call)</h2>
                    </div>
                    <div className="boxes_v4">
                        <div className="boxes_v4_row">
                            <div className="box_v4">
                                <Image className="coretext_icon" src={img1}></Image>
                                <p>
                                1-on-1 Multiformat Call                                </p>
                            </div>
                            <div className="box_v4">
                                <Image className="coretext_icon" src={img2}></Image>
                                <p>
                                Group Multiformat call
                                </p>
                            </div>
                            <div className="box_v4">
                                <Image className="coretext_icon" src={img3}></Image>
                                <p>
                                Run text queries on voice
                                </p>
                            </div>
                            <div className="box_v4">
                                <Image className="coretext_icon" src={img4}></Image>
                                <p>
                                Export synchronized file
                                </p>
                            </div>
                        </div>
                        <div className="boxes_v4_row">
                            <div className="box_v4">
                                <Image className="coretext_icon" src={img5}></Image>
                                <p>
                                Share real-time call streams
                                </p>
                            </div>
                            <div className="box_v4">
                                <Image className="coretext_icon" src={img6}></Image>
                                <p>
                                One side texts - one side speaks (coming soon)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default CoreFeature;