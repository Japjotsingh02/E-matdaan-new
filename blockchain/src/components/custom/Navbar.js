import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import { TopBar } from '../styles/Header.style';
import logo from '../../images/logo.svg';

class Navbar extends Component {
    state = {
        location: ""
    }

    componentWillReceiveProps(){
        console.log(this.props)
        this.setState({
            location: this.props.history.location.pathname
        })
    }
    render(){

        if(this.state.location === "/" && this.state.location === "/choose"  && this.state.location === "/vote"  && this.state.location === "/login"){
            return ( 
                <nav className="nav-wrapper black darken-2">
                    <div className="container">
                        <a className="brand-logo">
                            E-Election
                        </a>
                    </div>
                </nav>
            )
        }else{
            return(
                <TopBar>
                    <div className='left-bar'>
                        <img src={logo} alt='e-matdaan' className='logo'/>
                        <div className='title'>
                            <div>E-MatDaan</div>
                            <div>ई-मतदान</div>
                        </div>
                    </div>

                    {<div className='right-bar'>
                        <div className='link'><NavLink to="/">Home</NavLink></div>
                        <div className='link'><NavLink to="/newelection">New Election</NavLink></div>
                        <div className='link'><NavLink to="/elections">Elections</NavLink></div>
                        <div className='helpline-column'>
                            <span className='helpline-text'>Call For Helpline</span>
                            <div className='helpline-flex'>
                                <span className='helpline-no-text'>(Toll Free Number)</span>
                                <span className='helpline-no'>1950</span>
                            </div>
                        </div>
                    </div>}
                </TopBar>
            )
        }

        
    }
}

export default withRouter(Navbar)