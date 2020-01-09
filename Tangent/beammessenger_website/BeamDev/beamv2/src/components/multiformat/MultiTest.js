import React from 'react';
import DisplayInfo from './DisplayInfo';
import MultiInfoSection from './MultiInfoSection';
import PlatformInfo from './PlatformInfo';
import CoreText from './CoreText';
import CoreFeature from './CoreFeature';

class MultiTest extends React.Component{

    render(){
        return(
        <div id="multiPage">
            <DisplayInfo/>
            <MultiInfoSection/>
            <PlatformInfo/>
            <CoreText/>
            <CoreFeature/>
        </div>
        )
    }
}

export default MultiTest;