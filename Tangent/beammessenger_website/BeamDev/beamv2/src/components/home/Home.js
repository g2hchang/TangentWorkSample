import React from 'react';
import Submission from './Submission';
import MediaSection from './MediaSection';
import InfoSection from './InfoSection';
import SubInfoSection from './SubInfoSection';
import MarketingSector from './MarketingSector';
import WhitepaperSection from './WhitepaperSection';

class Home extends React.Component{

    render(){
        return(
        <div id="homePage">
            <Submission/>
            <MediaSection/>
            <InfoSection/>
            <SubInfoSection/>
            <MarketingSector/>
            <WhitepaperSection/>
        </div>
        )
    }
}

export default Home;