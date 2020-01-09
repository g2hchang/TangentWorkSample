import React from 'react';
import { Button, Form, Checkbox, Dropdown, Label, Image,Icon, Modal } from 'semantic-ui-react'
import img from '../../images/page2/popup_checkmark-01.svg';
import axios from 'axios';

import { 
    countryOptions, 
    platformOptions,
    Industry,
    entplatformType,
    anticpUsers
} from './data/country';

class InitialForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            useremail : null,
            username: '',
            companyname: '',
            showModal: false,
            activeIndex: null,
            show: false,
            showConsumer: true,
            showEnterprise: true,
            showTypeInfo: true,
            showConsumerForm: false,
            showEnterpriseForm: false,
            modalType: 'registerUser',
            selectedCountry: null,
            selectedPlatform: null,
            industryType: null,
            platformType: null,
            userNum : null,
            emptyInput: false,
            showTitle: true,
            showConsumerTitle:false,
            showEnterpriseTitle: false,
            showBackward: false,
            showEnterpriseSubbtn : false,
            showThankForm : false,
            consumerChecked : false,
            enterpriseChecked: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.show = this.show.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.sendData = this.sendData.bind(this);
        this.updateNameValue = this.updateNameValue.bind(this);
        this.updateCompanyName = this.updateCompanyName.bind(this);
        this.backPage = this.backPage.bind(this);
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
    }
    backPage(){
        if(this.state.activeIndex === 0 || this.state.activeIndex === 1){
            this.setState({
                showTypeInfo: true,
                showTitle: true,
                showConsumerForm: false,
                showEnterpriseForm: false,
                showConsumerTitle: false,
                showConsumer: true,
                showEnterprise: true,
                showBackward: false,
                activeIndex: null,
                modalType: 'registerUser'
            })
        }
    }
    updateCompanyName(evt){
        this.setState({
            companyname : evt.target.value
        })
    }
    updateNameValue(evt){
        this.setState({
            username: evt.target.value
        })
    }
    sendData(type){
        let formData;
        let selectedCnt = countryOptions.filter(obj =>
            {return obj.value == this.state.selectedCountry}
        )
        const config = {
            headers: {
            'Content-Type': 'application/json',
            }
        };
        if(type === 'C'){
            formData = JSON.parse(JSON.stringify({
                "email": this.state.useremail,
                "country":selectedCnt[0].text,
                "platform": this.state.selectedPlatform,
                "type" : 'C'
            }));
        }
        else if(type === 'E'){
            formData = JSON.parse(JSON.stringify({
                "email": this.state.useremail,
                "name": this.state.username,
                "count": this.state.userNum,
                "country":selectedCnt[0].text,
                "platform": this.state.platformType,
                "industryType": this.state.industryType,
                "companyName": this.state.companyname,
                "type" : 'E'
            }));
        }
        axios.post('/api/register',formData, config)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        this.setState({
            useremail: null,
            username: '',
            companyname: '',
            showModal: true ,
            activeIndex: null,
            show: false,
            showConsumer: false,
            showEnterprise: false,
            showTypeInfo: false,
            showTitle: false,
            showConsumerForm: false,
            showEnterpriseForm: false,
            modalType: 'thankForm',
            selectedCountry: null,
            selectedPlatform: null,
            industryType: null,
            platformType: null,
            userNum : null,
            showConsumerTitle: false,
            showEnterpriseTitle: false,
            showBackward: false,
            showThankForm: true,
            consumerChecked: false,
            enterpriseChecked: false
        });

        /*this.handleClose()*/
    }
    setindustryType(e, data){
        this.setState({
            industryType: data.value
        });
    }
    setNumUser(e, data){
        this.setState({
            userNum: data.value
        })

    }
    setPlatformType(e, data){
        this.setState({ 
            platformType: data.value
        })
        console.log(data.value);

    }
    setCountryValue(e, data) {
        this.setState({ selectedCountry: data.value })
    }
    setPlatformValue(e, data) {
        this.setState({ selectedPlatform: data.value })
    }
    
    handleClose = () => {
        this.setState({
            useremail: null,
            username: '',
            companyname: '',
            showModal: false ,
            activeIndex: null,
            show: false,
            showConsumer: true,
            showEnterprise: true,
            showTypeInfo: true,
            showTitle: true,
            showConsumerForm: false,
            showEnterpriseForm: false,
            modalType: 'registerUser',
            selectedCountry: null,
            selectedPlatform: null,
            industryType: null,
            platformType: null,
            userNum : null,
            showConsumerTitle: false,
            showEnterpriseTitle: false,
            showBackward: false,
            showThankForm:false,
            consumerChecked: false,
            enterpriseChecked: false

        });
        this.props.checkInputStatus(false);
        this.props.modalClose();

    }
    handleClick(key) {
        this.setState({activeIndex:key});
        if(key === 0 ){
            this.setState({
                showEnterprise : false,
                modalType: 'consumerPage',
                showTypeInfo: false,
                showConsumerForm: true,
                showEnterpriseForm: false,
                showTitle: false,
                showConsumerTitle: true,
                showEnterpriseTitle:false,
                showBackward: true
            });
        }
        else if(key === 1){
            this.setState({
                showConsumer : false,
                modalType: 'enterprisePage',
                showTypeInfo: false,
                showConsumerForm: false,
                showEnterpriseForm: true,
                showTitle: false,
                showEnterpriseTitle: true,
                showConsumerTitle:false,
                showBackward: true
            });
        }
   }
   show = (e) => {
        console.log(this.props.email);
        console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test('hanbin.chang@mail.utoronto.ca'));
        console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test('changhanbin91@gmail.com'));
        console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.props.email));

        console.log(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test('hanbin.chang@mail.utoronto.ca'));
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.props.email)){
            this.setState({
                showModal: true
            })
            //this.props.onChange('empty');
        }
        else{
            console.log("Invalid format");
            this.props.checkInputStatus(true);
        }
        this.setState({
            useremail : this.props.email
        });
        const config = {
            headers: {
            'Content-Type': 'application/json',
            }
        };
        let formData =JSON.parse(JSON.stringify({
            "email": this.state.email,
        }));
        /*
        axios.post('/api/register',formData, config)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        this.setState({
            email: '',
        })*/
       
        e.preventDefault();

    }
    toggleCheckbox(){
        if(this.state.activeIndex === 0){
            this.setState({
                consumerChecked : !this.state.consumerChecked
            });
        }
        else if(this.state.activeIndex === 1){
            this.setState({
                enterpriseChecked : !this.state.enterpriseChecked
            });
        }
        
    }
    render(){
        let showCons = this.state.showConsumer;
        let showEnt = this.state.showEnterprise;
        let showType = this.state.showTypeInfo;
        let showConsForm = this.state.showConsumerForm;
        let showEntForm = this.state.showEnterpriseForm;
        let showThank = this.state.showThankForm;
        this.state.showEnterpriseSubbtn = ((this.state.username === null || this.state.username.length === 0) || this.state.selectedCountry === null || 
            this.state.platformType === null || this.state.industryType === null || this.state.companyname === null || this.state.enterpriseChecked === false)

        return(
         <Modal onClose={() => this.handleClose()} open={this.state.showModal} className={this.state.modalType} trigger={<Button className="formBtn" onClick={this.show}>Sign Up</Button>}>
            <div className="container">
                <div id="closePopup" onClick={() => this.handleClose()}>
                    <Icon name="close"></Icon>
                </div>
                {this.state.showBackward ? <div id="backwardPop" onClick={() => this.backPage()}>
                    <Icon name="angle left"></Icon>
                </div> : null}
                {this.state.showTitle ? 
                <div id="popup_title"><h1>BeamCall Beta access</h1></div>
                : null}
                {this.state.showTitle ? <div id="popup_description"><p>Please select the version for you <br/>
                We will be rolling out on 1st come 1st served basis
                </p></div> : null}
                {this.state.showConsumerTitle ? 
                <div id="popup_consumer_title"><h1>Standard access</h1></div>
                : null
                }
                {this.state.showEnterpriseForm ? 
                <div id="popup_consumer_title"><h1>Enterprise access</h1></div>
                : null
                }

                {showCons ? <div className = {this.state.activeIndex === 0 ? "consumerSect active" : "consumerSect"} onClick={() => this.handleClick(0)}>
                    {/*showType ? <div className="typeInfo">
                        <p>Keep Party plans in check</p>
                        <p>Talk with significant other</p>
                        <p>Grandpa stays up to date</p>
                    </div> : null*/
                    showType ? <Button id="standard_service_btn">STANDARD</Button> : null}
                    {showConsForm ?
                        <Form onSubmit={()=>this.sendData('C')}>
                            <Form.Field required>
                                <label>Country</label>
                                <Dropdown 
                                placeholder='Select Country' 
                                fluid search 
                                selection 
                                value={this.state.selectedCountry}
                                onChange={this.setCountryValue.bind(this)}
                                options={countryOptions} /> 
                            </Form.Field>
                            <Form.Field required>
                                <label>Platform</label>
                                <Dropdown 
                                placeholder='Choose Platform' 
                                fluid search 
                                selection 
                                value={this.state.selectedPlatform}
                                onChange={this.setPlatformValue.bind(this)}
                                options={platformOptions} />   
                            </Form.Field>
                            <Form.Field>
                                <Checkbox label='By clicking this, you agree to receive
                                follow on emails about the Beam Platform and other relevant information'
                                onChange={this.toggleCheckbox} checked={this.state.consumerChecked} />
                            </Form.Field>
                            <Form.Button className="formBtn" content="SUBMIT" disabled={this.state.selectedCountry === null || this.state.selectedPlatform === null || this.state.consumerChecked === false}/>
                        </Form>
                    :null
                    }
                </div> : null}
                {showEnt ? <div className = {this.state.activeIndex === 1 ? "enterpriseSect active" : "enterpriseSect"} onClick = {() => this.handleClick(1)}>
                    {/*showType ? <div className="typeInfo">
                        <p>Search any call using text</p>
                        <p>Read along management calls</p>
                        <p>Export/share Multiformat files</p>
                    </div> : null */
                    showType ? <Button id="enterprise_service_btn">ENTERPRISE</Button> : null
                    }
                    {showEntForm ?
                        <Form onSubmit={()=>this.sendData('E')}>
                            <Form.Field required>
                                <label>Your name</label>
                                <input placeholder='' value={this.state.username} onChange={evt => this.updateNameValue(evt)} />
                            </Form.Field>
                            <Form.Field required>
                                <label>Country</label>
                                <Dropdown 
                                placeholder='' 
                                fluid search 
                                selection 
                                value={this.state.selectedCountry}
                                onChange={this.setCountryValue.bind(this)}
                                options={countryOptions} />  
                            </Form.Field>
                            <Form.Field required>
                                <label>Company name</label>
                                <input placeholder=''  value={this.state.companyname} onChange={evt => this.updateCompanyName(evt)}/>
                            </Form.Field>
                            <Form.Field required>
                                <label>Type of Industry</label>
                                <Dropdown 
                                placeholder='' 
                                fluid search 
                                selection 
                                value={this.state.industryType}
                                onChange={this.setindustryType.bind(this)}
                                options={Industry} />  
                            </Form.Field>
                            <Form.Field required>
                                <label>Beam Platform or Multiformat SDK</label>
                                <Dropdown 
                                placeholder='' 
                                fluid search 
                                selection 
                                value={this.state.platformType}
                                onChange={this.setPlatformType.bind(this)}
                                options={entplatformType} />  
                            </Form.Field>
                            <Form.Field required>
                                <label>How many anticipated users</label>
                                <Dropdown 
                                placeholder='' 
                                fluid search 
                                selection 
                                value={this.state.userNum}
                                onChange={this.setNumUser.bind(this)}
                                options={anticpUsers} />  
                            </Form.Field>
                            <Form.Field required>
                                <Checkbox label='By clicking this, you agree to receive
                                follow on emails about the Beam Platform and other relevant information' 
                                onChange={this.toggleCheckbox} checked={this.enterpriseChecked}/>
                            </Form.Field>
                            <Form.Button className="formBtn" content="SUBMIT" disabled={this.state.showEnterpriseSubbtn}/>
                        </Form>
                    :null
                    }
                </div> : null}
                {showThank ? 
                    <Form className="thankPopup">
                        <Image src={img}></Image>
                        <p>
                            Thank you for signing up to BeamCall Beta! We are excited to get the <br/>
                            app in your hands asap, and see the magic first hand. <br/>
                        </p>
                        <p>
                            Please stay tuned for updates by email
                        </p>
                        {/*<Form.Button className="formBtn" content="SHARE"  onClick={() => this.handleClose()} />*/}
                        <Form.Button className="formBtn" content="FINISH" onClick={() => this.handleClose()} />
                    </Form>
                    
                : null}
                {/*
                    <Button className={this.state.showsignBtn === true ? "formBtn active" : "formBtn"} onClick={() => this.showType()}>Sign up</Button>
                */}
            </div>
        </Modal>
        )
    }
}

export default InitialForm;

