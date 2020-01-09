import React from 'react';
import img1 from '../../images/page1/search.svg';
import img2 from '../../images/page1/share.svg';
import img3 from '../../images/page1/group.svg';
import img4 from '../../images/page1/export.svg';
import img5 from '../../images/page1/recall.svg';
import img6 from '../../images/page1/read.svg';
import Slider from "react-slick";


class SubInfoSection extends React.Component{

    render(){
        var settings = {
            className: "boxex_v3_mobile",
            dots: true,
            infinite: true,
            speed: 500,
            lazyLoad:true,
            initialSlide: 0,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return(
            <div id="subinfoSect">
                <div className="subInfoOuter">
                    <div className="container">
                        <h2>Using BeamCall feels familiar, yet Unique</h2>
                        {/*boxes_v3 for desktop*/}
                        <div className="boxes_v3">
                            <div className="box_v3">
                                <div className="box_v3_img">
                                    <img src={img1}></img>
                                </div>
                                <div className="box_v3_info">
                                    <div className="box_v3_title">
                                        <h4>Search</h4>
                                    </div>
                                    <div className="box_v3_info_paragraph">
                                        <p>
                                        Run text search queries on spoken words, as would with normal text messages
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="box_v3">
                                <div className="box_v3_img">
                                    <img src={img2}></img>
                                </div>
                                <div className="box_v3_info">
                                    <div className="box_v3_title">
                                        <h4>Share</h4>
                                    </div>
                                    <div className="box_v3_info_paragraph">
                                        <p>
                                        Open up important calls to your colleagues, reading along in real-time                                    
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="boxes_v3">
                            <div className="box_v3">
                                <div className="box_v3_img">
                                    <img src={img3}></img>
                                </div>
                                <div className="box_v3_info">
                                    <div className="box_v3_title">
                                        <h4>Group</h4>
                                    </div>
                                    <div className="box_v3_info_paragraph">
                                        <p>
                                        Have conference calls transcribed simultaneously as group chats
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="box_v3">
                                <div className="box_v3_img">
                                    <img src={img4}></img>
                                </div>
                                <div className="box_v3_info">
                                    <div className="box_v3_title">
                                        <h4>Export</h4>
                                    </div>
                                    <div className="box_v3_info_paragraph">
                                        <p>
                                        Export hyperlinked text/audio file or plain text
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="boxes_v3">
                            <div className="box_v3">
                                <div className="box_v3_img">
                                    <img src={img5}></img>
                                </div>
                                <div className="box_v3_info">
                                    <div className="box_v3_title">
                                        <h4>Recall</h4>
                                    </div>
                                    <div className="box_v3_info_paragraph">
                                        <p>
                                        Merging voice + text, any word can be played back by clicking on it
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="box_v3">
                                <div className="box_v3_img">    
                                    <img src={img6}></img>
                                </div>
                                <div className="box_v3_info">
                                    <div className="box_v3_title">
                                        <h4>Read</h4>
                                    </div>
                                    <div className="box_v3_info_paragraph">
                                        <p>
                                        Voicemail and audio notes are delivered simultaneously in both voice+text                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*carousel for mobile*/}
                        <Slider {...settings}>
                            <div className="box_v3_mobile">
                                <img src={img1}></img>
                                <h3>Search</h3>
                                <p>
                                Run text search queries on spoken words, as would with normal text messages
                                </p>
                            </div>
                            <div className="box_v3_mobile">
                                <img src={img2}></img>
                                <h3>Share</h3>
                                <p>
                                Open up important calls to your colleagues, reading along in real-time                                    
                                </p>
                            </div>
                            <div className="box_v3_mobile">
                                <img src={img3}></img>
                                <h3>Group</h3>
                                <p>
                                Have conference calls transcribed simultaneously as group chats
                                </p>
                            </div>
                            <div className="box_v3_mobile">
                                <img src={img4}></img>
                                <h3>Export</h3>
                                <p>
                                Export hyperlinked text/audio file or plain text
                                </p>
                            </div>
                            <div className="box_v3_mobile">
                                <img src={img5}></img>
                                <h3>Recall</h3>
                                <p>
                                Merging voice + text, any word can be played back by clicking on it
                                </p>
                            </div>
                            <div className="box_v3_mobile">
                                <img src={img6}></img>
                                <h3>Read</h3>
                                <p>
                                Voicemail and audio notes are delivered simultaneously in both voice+text
                                </p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

export default SubInfoSection;