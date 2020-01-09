import React from 'react';
import axios from 'axios';
import {Image} from 'semantic-ui-react';
import fbicon from '../../images/bottom social icons-01.png';
import twiticon from '../../images/bottom social icons-02.png';

class Footer extends React.Component{
    constructor(){
        super();
        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);

        this.clearContent = this.clearContent.bind(this);
        this.state = {
            email: '',
            message: 'Type message...',
            response: ''
        }
    }
    submitForm(e){
        e.preventDefault();
        this.setState({
            email: this.state.email,
            message: this.state.message
        });
        console.log(this.state.email);
        console.log(this.state.message);
        const config = {
            headers: {
              'Content-Type': 'application/json',
            }
          };
        let formData =JSON.parse(JSON.stringify({
            "email": this.state.email,
            "message": this.state.message
        }));
          
        axios.post('/api/sendquestion',formData, config)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          this.setState({
            email: '',
            message: 'Type message...'
         })
    }
    componentDidMount() {
        this.callApi()
          .then(res => this.setState({ response: res.express }))
          .catch(err => console.log(err));
    }
    handleChange(e) {
        this.setState({ email: e.target.value });
    }
    handleMessageChange(e){
        this.setState({ message: e.target.value });
    }
    callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };
    clearContent(){
        this.setState({
            message: ''
        });
    }

    render(){
        return(
            <div className="beamFooter">
                <div className="footerBackground">
                </div>
                <div id="questionnaire">
                    <div id="questionContainer" className="container">
                        <p id="quesitonP">
                        Have a question about Beam Platform or want to leave a message?
                        </p>
                        <form id="questionForm" onSubmit={(e)=>this.submitForm(e)} method="POST">
                            <input type="email" onChange={ (e) => this.handleChange(e) } placeholder="Enter your email"></input>
                            <textarea 
                            data-enable-grammarly="false" 
                            value={this.state.message}
                            onFocus={this.clearContent}
                            onChange={ (e) => this.handleMessageChange(e) }
                            ></textarea>
                            <button >CONTACT BEAM</button>
                        </form>
                    </div>
                    <div id="socialIcons">
                        <a target="_blank" rel="noopener noreferrer"
                            href="https://www.facebook.com/Beam-Messenger-1482148208695662/">
                            <Image src={fbicon}></Image>
                        </a>
                        <a target="_blank" rel="noopener noreferrer"
                            href="https://twitter.com/Beam_Messenger">
                            <Image src={twiticon}></Image>
                        </a> 
                    </div>
                </div>
                
                <div id="copyRight">
                    <p> Copyright &copy; 2018 - Beam Propulsion Labs Inc </p>
                </div>
            </div>
        )
    }
}

export default Footer;

