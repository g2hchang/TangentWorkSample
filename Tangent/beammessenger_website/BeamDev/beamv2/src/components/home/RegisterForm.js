import React from 'react';
import InitialForm from './InitialForm';
import {Form} from 'semantic-ui-react';

class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            error : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.checkInputStatus = this.checkInputStatus.bind(this);

        /*this.handleClick = this.handleClick.bind(this);
        this.showType = this.showType.bind(this);*/

    }
    handleChange(event, value){
        this.setState({
            email: event.target.value,
        });
        console.log(this.state.email);
    }

    handleClick(key) {
        console.log(key);
        if(key == 0){
            this.setState({
                activeIndex: 0
            })
        }
        else if(key == 1){
            this.setState({
                activeIndex: 1
            })
        }
        this.showType(key)
   }
   showType(key){
        console.log(key);
        if (key === 0){
            this.setState({
                showConsumer: true,
                showEnterprise: false,
            })
        }
        else if(key === 1){
            this.setState({
                showConsumer: false,
                showEnterprise: true,

            })
        }
   }
    hide(e) {
        e.preventDefault();
    }

    closeModal(){
        console.log('Close modal called');
        this.setState({
            email: ''
        });
    }
    checkInputStatus(status){
        this.setState({
            error: status
        });
    }
    render(){
       
        return(
            <div id="registerForm">
                <p id="beamInfo">
                BeamCall works in true real-time to automatically convert
                your phone calls to text message format, on the fly, while you talk!
                </p>
                <div className="signupForm">
                    <input className={this.state.error === true ? "emailError" : null} value={this.state.email}  
                    placeholder="Enter your e-mail" 
                    ref="form" onChange={this.handleChange}
                    type="email"></input>
                    <InitialForm checkInputStatus={this.checkInputStatus} modalClose={this.closeModal} email={this.state.email}/>
                    {/*<button onClick={(e) => this.show(e)}>Sign Up</button>*/}
                    
                </div>
               
                <p id="signUpInfo">
                Leave your info to sign up for BeamCall Beta. We will be rolling out on a 1st come 1st served basis.
                </p>
                <div id="demoLink">
                    <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/wivroV3auWs">Watch video preview
                        <span><i className="fa fa-caret-right"></i></span>
                    </a>
                </div>
                
            </div>
        )
    }
}

export default RegisterForm;

