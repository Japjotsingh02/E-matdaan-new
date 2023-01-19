import styled from 'styled-components';

export const HomeImg=styled.img`
    width:100%;
`

export const Wrapper=styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Hind:wght@300&family=Merriweather+Sans:wght@300;800&family=Poppins:wght@300;600;700;800&display=swap');

    display:flex;
    margin-top:25px;

    .left-container{
        margin-left:57px;
        flex: 1 1 60%;
    }

    .welcome-heading{
        font-family: 'Poppins';
        font-weight: 800;
        font-size: 36px;
        color: #0046BB;
        text-align:center;
    }

    .notices{
        flex-wrap:wrap;
    }

    .heading-text{
        font-family: 'Poppins';
        font-weight: 300;
        font-size: 20px;
        line-height: 30px;
        color: #000000;
        text-align:center;
    }

    .articles-cards{
        display:flex;
        flex-wrap: wrap;
        gap:28px;
        margin: 29px 0 69px;
    }

    .card{
        background: rgba(221, 231, 230, 0.61);
        border: 8px solid #FFFFFF;
        flex:1 1 28%;
        box-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
        border-radius: 13px;
        font-family: 'Poppins';
        font-weight: 600;
        font-size: 15px;
        line-height: 22px;
        text-align: center;
        color: rgba(0, 0, 0, 0.75);
        display:flex;
        flex-direction:column;
        align-items:center;
        padding-top:34px;
        padding-bottom:17px;
    }

    .card-image{
        margin-bottom:11px;
    }

    .notices{
        margin:0 34px 0 46px;
        flex: 1 1 40%;
    }

    .notice-head{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        color: rgba(91, 90, 96, 0.75);
    }

    .notice-board{
        background: #FFFDFD;
        // box-shadow: 0px -3px 11px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 16px 11px rgb(0 0 0 / 25%);
        padding: 1rem 1.93rem 2rem 10px;
        margin-top:13px;
    }

    .notice-board ul li{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        text-align: justify;
        color: #948E8E;
    }

    .vote-now-card{
        background: linear-gradient(90deg, #FF6B00 0%, rgba(255, 108, 1, 0.85) 26.83%, #04791E 79.57%, #0FD33A 100%);
        border: 1px solid #F2ECEC;
        box-shadow: -32px 17px 28px rgba(147, 139, 139, 0.25);
        border-radius: 13px;
        display:flex;
        margin-right:31px;
        position:relative;
        gap: 30px;
        align-items: center;
    }

    .vote-now-head{
        font-family: 'Merriweather Sans';
        flex-wrap:wrap;
        flex: 1 1 10%;
        text-transform:uppercase;
        font-style: normal;
        font-weight: 800;
        font-size: 36px;
        line-height: 45px;
        color: #FFFCFC;
        text-shadow: 0px 8px 9px rgba(0, 0, 0, 0.25);
        padding:19px 0px 34px 57px;
    }

    .vote-now-right{
        flex: 1 1 90%;
        display:flex;
        flex-direction:column;
        margin-right:65px;
        align-items:center;
    }

    .vote-now-button{
        background: #0D0385;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.75);
        border-radius: 19px;
        font-family: 'Poppins';
        font-weight: 800;
        font-size: 36px;
        line-height: 54px;
        margin:39px 0px 0px 0px;
        text-transform: uppercase;
        padding: 15px 50px 8px 43px;
        border:0;
    }

    .vote-now-button a {
        color: #FFFFFF;
        text-decoration: none;
    }
 
    .circle-flag{
        top: -60px;
        right: -100px;
        position: absolute;
    }

    .time-left{
        font-family: 'Merriweather Sans';
        font-style: normal;a
        font-weight: 300;
        font-size: 20px;
        line-height: 25px;
        color: #FFFFFF;
        margin:26px 0px 29px;
        text-align:center;
    }

    .time-of-notice{
        color:#000000;
    }

    .navigations-tab {
        box-sizing: border-box;
        background-color: #FFFCFC
        box-shadow: 0px 16px 11px rgba(0, 0, 0, 0.25);
        margin-top: 20px;
        padding: 10px;
    }

    .navigations {
        background-color: #F9FEBC;
        color: #1D08A0;
        margin: 10px;
        padding: 0 25px;
        height: 50px;
        font-family: 'Poppins';
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        display: flex;
        align-items: center;
    }
`;

export const Footer=styled.div`
    background: #0046BB;
    margin-top:61px;
    height: 193px;
`