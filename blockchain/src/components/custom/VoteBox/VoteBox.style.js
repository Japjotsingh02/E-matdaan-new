import styled from 'styled-components';

export const Box=styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Hind:wght@300&family=Merriweather:wght@300;700&family=Poppins:wght@300;600;700;800&display=swap');

    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:20px;
    padding:0px 35px;
    background: #FFFFFF;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 40vw;
    height: 60px;

    img {
        width: 50px;
        height: 50px;
    }

    .vote-now-button {
        background: #27B63E;
        border-radius: 15px;
        border: 0;
        padding: 2px 25px;
        font-family: 'Poppins';
        font-weight: 600;
        font-size: 12px;
        line-height: 24px;
        text-align: center;
        cursor: pointer;
        color: #fff;
    }

    .vote-now-button a {
        color: #fff;
        text-decoration: none;
    }

    .party-name{
        display:flex;
        flex-direction:column;
    }

`;