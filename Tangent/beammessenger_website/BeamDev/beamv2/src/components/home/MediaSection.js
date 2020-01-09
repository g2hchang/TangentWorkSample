import React from 'react';
import logo1 from '../../images/page1/Media logo-01.png';
import logo2 from '../../images/page1/Media logo-02.png';
import logo3 from '../../images/page1/Media logo-03.png';
import logo4 from '../../images/page1/Media logo-04.png';
import logo5 from '../../images/page1/Media logo-05.png';
import logo6 from '../../images/page1/Media logo-06.png';
import logo7 from '../../images/page1/Media logo-07.png';
import logo8 from '../../images/page1/Media logo-08.png';


class MediaSection extends React.Component{

    render(){
        return(
        <div id="mediaCoverage">
            <h2>Previous Beam Coverage</h2>
            <div className="container">
                <div id="boxes">
                    <div className="box">
                        <a target="_blank" rel="noopener noreferrer"
                        href="https://www.businessinsider.com/beam-messaging-app-shows-messages-as-you-type-2014-11">
                            <img src={logo1}></img>
                        </a>
                    </div>
                    <div className="box">
                    <a target="_blank" rel="noopener noreferrer"
                    href="https://www.technologyreview.com/s/537826/real-time-texting-app-lets-you-interrupt-without-saying-a-word/">
                            <img src={logo2}></img>
                        </a>
                    </div>
                    <div className="box">
                    <a target="_blank" rel="noopener noreferrer"
                    href="https://www.buzzfeednews.com/article/josephbernstein/the-terrifyingly-transparent-texting-of-the-future-is-here">
                            <img src={logo3}></img>
                        </a>
                    </div>
                    <div className="box">
                        <a target="_blank" rel="noopener noreferrer"
                        href="https://www.theatlantic.com/technology/archive/2014/11/text-messages-that-render-as-theyre-typed-the-perfect-technology-for-humanitys-dystopian-future/382709/">
                            <img src={logo4}></img>
                        </a>
                    </div>
                    <div className="box">
                        <a target="_blank" rel="noopener noreferrer"
                        href="https://www.youtube.com/watch?v=AfeFiRtOWVc">
                            <img src={logo5}></img>
                        </a>
                    </div>
                    <div className="box">
                        <a target="_blank" rel="noopener noreferrer" href=" https://www.huffingtonpost.ca/entry/beam-messenger_n_6154986">
                            <img src={logo8}></img>
                        </a>
                    </div>
                    <div className="box">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.cnet.com/es/videos/las-tres-de-la-semana-beam-messenger-phototime-y-happn/">
                            <img src={logo7}></img>
                        </a>
                    </div>
                    <div className="box">
                        <a target="_blank" rel="noopener noreferrer"
                        href="https://www.wired.it/mobile/app/2014/11/21/beam-chat-in-tempo-reale/">
                            <img src={logo6}></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default MediaSection;