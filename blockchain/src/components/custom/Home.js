import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Footer, HomeImg, Wrapper } from '../styles/Home.style';
import voteMatters from '../../images/vote matters.svg';
import know from '../../images/know-candidates.svg';
import requirements from '../../images/requirements.svg';
import circleFlag from '../../images/circle-flag.svg';
import homepage from '../../images/homepage.svg';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            showComponents: false
        }
    }

    render(){
        return (
            <>
            {/* <div className="container">
                <ul className="collection with-header">
                <li className="collection-header"><h3>Choose User Type</h3></li>
                    <li className="collection-item"><div><h4>User<Link to="/choose" className="secondary-content"><i className="material-icons">send</i></Link></h4></div></li>
                    <li className="collection-item"><div><h4>Admin<Link to="/login" className="secondary-content"><i className="material-icons">send</i></Link></h4></div></li>
                </ul>
            </div> */}
            {/* <Header/> */}

            <HomeImg src={homepage} alt='homepage'></HomeImg>

            <Wrapper>
                <div className='left-container'>
                    <div className='welcome-heading'>Welcome to E-MatDaan</div>
                    <div className='heading-text'>Our nation’s most reliable,secure and transparent E-Voting portal</div>

                    <div className='articles-cards'>
                        <div className='card'>
                            <img src={voteMatters} alt="vote-matters" className='card-image'></img>
                            <span>My vote matters</span>
                        </div>
                        <div className='card'>
                            <img src={know} alt="know" className='card-image'></img>
                            <span>Know Your Candidates</span>
                        </div>
                        <div className='card'>
                            <img src={requirements} alt="requirements" className='card-image'></img>
                            <span>Requirements for E-Vote</span>
                        </div>
                        <div className='card'>
                            <img src={voteMatters} alt="vote-matters" className='card-image'></img>
                            <span>State Elections</span>
                        </div>
                        <div className='card'>
                            <img src={voteMatters} alt="vote-matters" className='card-image'></img>
                            <span>Voter’s Education</span>
                        </div>
                        <div className='card'>
                            <img src={voteMatters} alt="vote-matters" className='card-image'></img>
                            <span>Photo Gallery</span>
                        </div>
                    </div>
                    <div className='vote-now-card'>
                        {/* <img src={voteNowBackground} alt='election-background'></img> */}
                        <div className='vote-now-head'>Delhi Elections 2025</div>
                        <div className='vote-now-right'>
                            <button className='vote-now-button'>
                                <Link to="/choose">Vote Now</Link>
                            </button>
                            <div className='time-left'>04:37:00 hrs left</div>
                        </div>
                        <img src={circleFlag} alt='circle-flag' className='circle-flag'></img>
                    </div>
                    <div className='navigations-tab'>
                        <div className='navigations'>Register Now to Vote</div>
                        <div className='navigations'>Search Your Name in Voter List</div>
                        <div className='navigations'> Citizen Complaint Box</div>
                    </div>
                </div>
                <div className='notices'>
                    <div className='notice-head'>Notices and Latest Feed</div>
                    <div className='notice-board'>
                        <ul>
                            <li>General Election to the Legislative Assembly of Himachal Pradesh, 2022-Allotment of Broadcast/ Telecast time to National/State Political Parties-reg
                                <div className='time-of-notice'>23 hours ago</div>
                            </li>
                            <li>
                                General Election to the Legislative Assembly of Himachal Pradesh, 2022 - Media Coverage during the period referred to in Section 126 of the R.P. Act, 1951.
                                 <div className='time-of-notice'>Monday at 12:57</div>
                            </li>
                            <li>
                                Immediate action to be taken for enforcement of Model Code of Conduct after announcement of General Elections to the State Legislative Assembly of Himachal Pradesh, 2022
                                 <div className='time-of-notice'>Friday at 13:14</div>

                            </li>
                            <li>
                                General Elections to the State Legislative Assembly of Himachal Pradesh, 2022 - Release of funds under MPs’/MLAs’ Local Area Development Scheme
                                 <div className='time-of-notice'>Friday at 13:14</div>

                            </li>
                            <li>
                                Application of Model Code of Conduct – General Elections to the State Legislative Assembly of Himachal Pradesh.
                                Immediate action to be taken for enforcement of Model Code of Conduct after announcement of General Elections to the State Legislative Assembly of Himachal Pradesh, 2022
                                 <div className='time-of-notice'>Friday at 13:14</div>
                            </li>
                            <li>
                                General Elections to the State Legislative Assembly of Himachal Pradesh, 2022 - Release of funds under MPs’/MLAs’ Local Area Development Scheme
                                 <div className='time-of-notice'>Friday at 13:11</div>
                            </li>
                            <li>
                                Application of Model Code of Conduct – General Elections to the State Legislative Assembly of Himachal Pradesh.
                            </li>
                        </ul>
                    </div>
                    {/* <div className='bot'>
                        <div className='bot-help'>
                            <div>Need Help?</div>
                            <div>Ask our Bot</div>
                        </div>
                        <img src={bot} alt="Bot" className='bot-image'/>
                    </div> */}
                </div>
            </Wrapper>
            <Footer/>
        </>
        )
    }
}

export default Home