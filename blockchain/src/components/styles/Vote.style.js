import styled from 'styled-components';

export const Main=styled.div`
    height: calc(100vh - 100px);
    overflow-y: scroll;
`

export const Details=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .type {
        font-weight: bold;
    }

    .data {
        margin-left: 0.5vw;
    }
`

export const Wrapper=styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Hind:wght@300&family=Merriweather+Sans:wght@300;800&family=Poppins:wght@300;600;700;800&display=swap');

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.7vw 8.5vw;
    padding: 0.7vw;
    background: #FFFBFB;
    box-shadow: 2px 13px 33px 15px rgba(109, 99, 99, 0.25);
    border-radius: 20px;

    .heading {
        color: #0046BB;
        text-transform: uppercase;
        text-decoration: underline;
    }

    .proceed-button {
        background: #0046BB;
        color: #fff;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.75);
        border-radius: 10px;
        font-family: 'Poppins';
        font-weight: 600;
        font-size: 1rem;
        padding: 5px 20px;
        margin-bottom: 10px;
        width: 10vw;
        border:0;
    }

    .proceed-button a {
        color: #FFFFFF;
        text-decoration: none;
    }

    .instructions {
        font-family: 'Hind';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 38px;
    }

    .confirm-button {

    }

    .vote-button,
    .confirm-button {
        background: #27B63E;
        border-radius: 15px;
        border: 0;
        padding: 0 15px;
        margin-left: 10px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 24px;
        text-align: center;
        color: #FFFFFF;
    }

`;