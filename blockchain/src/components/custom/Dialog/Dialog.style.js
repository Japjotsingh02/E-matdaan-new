import styled from 'styled-components';

export const Box=styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Hind:wght@300&family=Merriweather:wght@300;700&family=Poppins:wght@300;600;700;800&display=swap');

    position: absolute;
    top: 0;
    left: 0;
    display:flex;
    background: #0000009F;
    width: 100%;
    height: 100%;
    z-index: 9999;
`;

export const Inbox=styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Hind:wght@300&family=Merriweather:wght@300;700&family=Poppins:wght@300;600;700;800&display=swap');

    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    text-align: center;
    margin: 15% 33%;
    padding: 20px;
    width: 100%;
    height: auto;
    border-radius: 15px;
    box-sizing: border-box;

    .buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .btn {
        background: #5BEA43;
        border: 0;
        margin: 20px;
        border-radius: 10px;
        text-transform: uppercase;
        font-family: 'Hind';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: #FFFFFF;
        padding: 8px 12px;
        cursor: pointer;
    }
`;