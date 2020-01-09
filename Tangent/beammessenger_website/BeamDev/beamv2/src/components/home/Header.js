import React from 'react';
import ReactSVG from 'react-svg'
import beamLogo from '../../images/page1/beamcall_logo.svg';
import { Button, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = { activeItem: 'home', visible:false, icon:'bars' };
        this.openSidebar = this.openSidebar.bind(this);
        this.closeSidebar = this.closeSidebar.bind(this);

    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name, visible:false, icon:'bars' });

    openSidebar(){
        this.setState({ visible: !this.state.visible, icon: 'close' })
    }
    closeSidebar(){
        this.setState({activeItem: null, icon:'bars'});
    }
    render(){
        const { activeItem } = this.state
        
        return(
            <div className="beamHeader">
                <Menu size='large' stackable>
              
                    <Menu.Menu position='left'>
                    <Menu.Item className="expand">
                        <Button onClick={() => this.openSidebar()} icon>
                            <Icon name={this.state.icon} />
                        </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <div>
                            <a href="/">
                                <Image src={beamLogo}></Image>
                            </a>
                        </div>
                        <div>
                            <p>Beta</p>
                        </div>
                    </Menu.Item>

                    </Menu.Menu>
                    <Menu.Menu position='right'>

                          <Menu.Item 
                          name='home' 
                          active={activeItem === 'home'} 
                          onClick={this.handleItemClick} 
                          as={Link} 
                          to='/'/>
                          <Menu.Item
                            name='multiformat sdk'
                            active={activeItem === 'multiformat sdk'}
                            onClick={this.handleItemClick}
                            as={Link} 
                            to='/multi'
                           />
                           <Menu.Item
                            name='standards'
                            active={activeItem === 'standards'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to='/standards'
                           />
                           <Menu.Item
                            name='blog'
                            active={activeItem === 'blog'}
                            onClick={()=> window.open("https://medium.com/@beamplatform/data-is-a-2-way-street-in-a-post-gdpr-world-f981b561e461", "_blank")}
                           />
                           {/*as={Link}
        to='https://medium.com/@beamplatform/data-is-a-2-way-street-in-a-post-gdpr-world-f981b561e461'*/}
                    </Menu.Menu>
                </Menu>
                {/*<div className="headerBackground">
                    <div className="container">
                        <div className="homelogo">
                            <ReactSVG path={beamLogo} 
                                />
                        </div>
                        <ListGroup>
                            <ListGroupItem>
                            <a href="#">BLOG</a>
                            </ListGroupItem>
                            <ListGroupItem>
                            <a href="#">STANDRADS</a>
                            </ListGroupItem>
                            <ListGroupItem>
                                <a href="#">MULTIPLATFORM SDK</a>
                            </ListGroupItem>
                            <ListGroupItem>
                                <a href="#">BEAM HOME</a>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
            </div>*/}
                <Sidebar.Pushable as={Segment} className={this.state.visible === true ? "active" : null}>
                        <Sidebar
                            as={Menu}
                            animation='overlay'
                            icon='labeled'
                            inverted
                            onHide={()=>this.closeSidebar()}
                            vertical
                            visible={this.state.visible}
                            width='thin'
                        >
                            <Menu.Item 
                          name='HOME' 
                          active={activeItem === 'home'} 
                          onClick={this.handleItemClick} 
                          as={Link} 
                          to='/'/>
                          <Menu.Item
                            name='MULTIFORMAT SDK'
                            active={activeItem === 'multiformat sdk'}
                            onClick={this.handleItemClick}
                            as={Link} 
                            to='/multi'
                           />
                           <Menu.Item
                            name='STANDARDS'
                            active={activeItem === 'standards'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to='/standards'
                           />
                           <Menu.Item
                            name='BLOG'
                            active={activeItem === 'blog'}
                            onClick={()=> window.open("https://medium.com/@beamplatform/data-is-a-2-way-street-in-a-post-gdpr-world-f981b561e461", "_blank")}
                           />
                        </Sidebar>
                    </Sidebar.Pushable>
            </div>
        )
    }
}

export default Header;

