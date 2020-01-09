import React from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'semantic-ui-react';
import img1 from '../../images/page2/B3.svg';
import img2 from '../../images/page2/1apple.svg';
import img3 from '../../images/page2/2android.svg';
import img4 from '../../images/page2/3desktop.svg';
import InitialForm from '../home/InitialForm';
class PlatformInfo extends React.Component{
    constructor(){
        super();
        this.state = {
            email : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event){
        this.setState({email: event.target.email});
    }
    handleClick() {
        ReactDOM.findDOMNode(this.refs.form).email = "";
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
        <div id="platFormInfo">
            <div className="container">
                <div id="platformBackground">
                    <Image src={img1}></Image>
                </div>
                <div id="platformDescription">
                    <div id="platformDescTitle">
                        <h2>Beam Multiformat SDK</h2>
                        <div id="osIcons">
                            <Image className="osIcon" src={img2}></Image>
                            <Image className="osIcon" src={img3}></Image>
                            <Image className="osIcon" src={img4}></Image>
                        </div>
                       
                    </div>
                    <div id="platformDescTitlev2">
                        <p className="beamParagraph">
                        Consistent experience across native iOS, Android and Web 
                        (JavaScript). All users within the same Beam application 
                        can talk to each other, across 3 platforms.
                        </p>
                        <p className="beamParagraph">
                        Next generation Voice+Text Capabilities - create custom 
                        voice applications on top (soon to come).
                        </p>
                    </div>
                    <div id="platformSubmit">
                        <form className="signupForm">
                            <input className={this.state.error === true ? "emailError" : null}
                            value={this.state.value}  
                            placeholder="Enter your e-mail" 
                            ref="form" onChange={this.handleChange}
                            type="email"></input>
                            <InitialForm email={this.state.value}
                            checkInputStatus={this.checkInputStatus} 
                            modalClose={this.closeModal} 
                            email={this.state.email}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default PlatformInfo;