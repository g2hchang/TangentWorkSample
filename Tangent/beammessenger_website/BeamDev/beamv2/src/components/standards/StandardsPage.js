import React from 'react';
import DisplayStandardInfo from './DisplayStandardInfo';
import AwardInfo from './AwardInfo';
import Timeline from './Timeline';

class StandardsPage extends React.Component{

    render(){
        return(
        <div id="standardsPage">
            <DisplayStandardInfo/>
            <Timeline/>
            <AwardInfo/>
        </div>
        )
    }
}

export default StandardsPage;