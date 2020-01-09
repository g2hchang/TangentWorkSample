import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import axios from 'axios';

class ConsumerForm extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="submit_form">
                <div id="results" className="search-results">
                    Consumer Result
                </div>
            </div>
        )
    }
}

export default ConsumerForm;

