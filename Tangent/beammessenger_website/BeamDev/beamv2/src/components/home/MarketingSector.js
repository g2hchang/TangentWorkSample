import React from 'react';
import {Menu, Segment, Grid, Image, Item} from 'semantic-ui-react';
import img1 from '../../images/page1/customer.svg';
import img2 from '../../images/page1/legal.svg';
import img3 from '../../images/page1/Defence.svg';
import img4 from '../../images/page1/laptop.svg';
import img5 from '../../images/page1/health.svg';
import img6 from '../../images/page1/car.svg';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

class MarketingSector extends React.Component{
    
    constructor(){
        super();
      
        this.firstText = `BeamCall merges customer calls and text message conversations into the same interface. The enterprise side stands to benefit greatly from real-time transcription, as well as search and indexing tools. The customer side however, for the first time since GDPR, also has access to the call and text multiformat data for their own individual uses.`;
        this.secondText = `Lawyers and Paralegals communicate a great deal of important and sensitive information, between clients and themselves. BeamCall allows them to have a real-time searchable repository of past work, to consult and query in a moment’s notice. The “Tune In” feature will also let partners and associates to read along a real-time feed of phone calls as they happen on desktop and mobile devices.`;
        this.thirdText = `Real-Time Text (RTT) is the new middle ground between voice calls and text messages, at once both silent and instantaneous. Perfect for situations where critical information needs to be relayed immediately yet inaudibly. Furthermore, Multiformat tech like BeamCall opens up the conversational data to real-time Natural Language Processing, supplementing the human element with the power of AI.`;
        this.fourthText = `The Financial sector enjoys heavy oversight with policies like SOX, FINRA, MiFID II and others, resulting in requirements for highly structured handling of all electronic communication, whether it’s email, text or calls. BeamCall creates a unified searchable directory of all correspondence, whether voice or text, and does this in real-time, for greatly simplified compliance.`;
        this.fifthText = `While offering unparalleled access to healthcare, Telemedicine often lacks the engagement that comes with live, in-person meetings. Real-Time Text (RTT) helps bridge this gap by offering immediate answer/response dynamic that is akin to a voice interaction. And when text won’t do, switching to BeamCall is seamless, preserving the full record of a continuous interaction between patient and provider.`;
        this.sixthText = `Cars are fast becoming computers on wheels, compatible with many of the familiar apps. BeamCall goes a step further, demonstrating the ultimate “CarPhone 2.0”, affording the driver fully hands-free operation. Whether you are being texted or called, you can respond in real-time with just your speech, conducting a fully synchronous conversation, while the other side can either hear or read your responses. When an address gets spoken, it’s easily added to the map.`;

        this.tabTextMatch = {
             0 :  this.firstText,
             1 : this.secondText,
             2 : this.thirdText,
             3: this.fourthText,
             4: this.fifthText,
             5: this.sixthText
        };
        this.state = { 
            activeItem: 'bio',
            activeIndex: 0,
            shownText : this.tabTextMatch[0]
        } ;
        console.log(this.tabTextMatch['tab1']);
        this.handleItemClick = this.handleItemClick.bind(this); 
    }
    handleItemClick(key)
    {
        this.setState({
            activeIndex: key,
            shownText: this.tabTextMatch[key]
        });
        
    }

    render(){
        const { activeItem } = this.state;
        const FirstContent = () => (
            <p style={{ padding: '18px' }}>
              {this.tabTextMatch[0]}
            </p>
          );
        const SecondContent = () => (
            <p style={{ padding: '18px' }}>
              {this.tabTextMatch[1]}
            </p>
        );  
        const ThirdContent = () => (
            <p style={{ padding: '18px' }}>
              {this.tabTextMatch[2]}
            </p>
          );
        const FourthContent = () => (
            <p style={{ padding: '18px' }}>
              {this.tabTextMatch[3]}
            </p>
        );  
        const FifthContent = () => (
            <p style={{ padding: '18px' }}>
              {this.tabTextMatch[4]}
            </p>
          );
        const SixthContent = () => (
            <p style={{ padding: '18px' }}>
              {this.tabTextMatch[5]}
            </p>
        );  

        return(
        <div id="marketingSection">
                
            <div className="container">
                <h2>Reinvent your communications</h2>
                <p className="m-paragraph">
                Beam Platform offers an enterprise-grade real-time text (RTT) and voice communications 
                suite, able to be deployed into a variety of different industries. Organizations looking 
                to unify chat and voice conversations, increase speed & efficiencies, and begin capturing
                new sets of data, stand to benefit the most from the Beam Platform.
                </p>
                <Menu attached='top' tabular>
                    <div className={ this.state.activeIndex === 0 ? "market-item active" : "market-item"} onClick = {() => this.handleItemClick(0)}>
                        <Item >
                            <Item.Image src={img1} />
                            <Item.Content verticalAlign='middle'>Customer Engagment</Item.Content>
                        </Item>
                    </div>
                        
                    {/*
                        <Menu.Item 
                    name='Customer Engagement' 
                    active={this.state.activeItem === 'Customer Engagement' } 
                    onClick={this.handleItemClick}>
                            <Image src={img1}></Image>
                    </Menu.Item>
                    */}
                    
                    <div className={ this.state.activeIndex === 1 ? "market-item active" : "market-item"} onClick = {() => this.handleItemClick(1)}>
                        <Item>
                            <Item.Image src={img2} />
                            <Item.Content verticalAlign='middle'>Legal & Justice</Item.Content>
                        </Item>
                    </div>
                       
                    <div className={ this.state.activeIndex === 2 ? "market-item active" : "market-item"} onClick = {() => this.handleItemClick(2)}>
                        <Item>
                            <Item.Image src={img3} />
                            <Item.Content verticalAlign='middle'>Defence & Government</Item.Content>
                        </Item>
                    </div>
                    <div className={ this.state.activeIndex === 3 ? "market-item active" : "market-item"} onClick = {() => this.handleItemClick(3)}>
                        <Item>
                            <Item.Image src={img4} />
                            <Item.Content verticalAlign='middle'>Financial & Payments</Item.Content>
                        </Item>
                    </div>
                    <div className={ this.state.activeIndex === 4 ? "market-item active" : "market-item"} onClick = {() => this.handleItemClick(4)}>
                        <Item>
                            <Item.Image src={img5} />
                            <Item.Content verticalAlign='middle'>Telehealth & EMR</Item.Content>
                        </Item>
                    </div>
                    <div className={ this.state.activeIndex === 5 ? "market-item active" : "market-item"} onClick = {() => this.handleItemClick(5)}>
                        <Item>
                            <Item.Image src={img6} />
                            <Item.Content verticalAlign='middle'>Automotive & Transportation</Item.Content>
                        </Item>
                    </div>
                </Menu>
                <Segment attached='bottom'>
                    <p className="m-paragraph">
                        {this.state.shownText}
                    </p>
                </Segment>
                <Accordion atomic={true}>
                    <AccordionItem title="Customer Engagement">
                        <Item.Image src={img1} />
                        <FirstContent />
                    </AccordionItem>

                    <AccordionItem title="Legal & Justice">
                        <Item.Image src={img2} />
                        <SecondContent/>
                    </AccordionItem>

                    <AccordionItem title="Defence & Government">
                        <Item.Image src={img3} />
                        <ThirdContent />
                    </AccordionItem>
                    <AccordionItem title="Financial & Payments">
                        <Item.Image src={img4} />
                        <FourthContent />
                    </AccordionItem>

                    <AccordionItem title="Telehealth & EMR">
                        <Item.Image src={img5} />
                        <FifthContent />
                    </AccordionItem>

                    <AccordionItem title="Automotive & Transportation">
                        <Item.Image src={img6} />
                        <SixthContent />
                    </AccordionItem>

                </Accordion>
            </div>
        </div>
        )
    }
}

export default MarketingSector;