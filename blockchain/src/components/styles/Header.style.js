import styled from 'styled-components';

export const TopBar=styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Hind:wght@300&family=Merriweather:wght@300;700&family=Poppins:wght@300;600;700;800&display=swap');

    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:14px;
    padding:8px 15px;
    height: 70px;
    background: #0046BB;

    .left-bar{
        font-family: 'Hind';
        display:flex;
        align-items:center;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 32px;
        color: #FFFFFF;
    }

    .link,.link a{
        color:#ffffff;
    }

    .link{
        margin-right:3rem;
        font-weight:700;
    }

    .logo{
        width: 66px;
        height: 66px;
    }

    .title{
        margin-left:8px;
    }

    .right-bar{
        display:flex;
        align-items:center;
    }

    .select-bar{
        border-left: 1px solid #5E85CF;
        border-right:1px solid #5E85CF;
        padding:0 26px;
    }

    .helpline-column{
        font-family: 'Poppins',sans-serif;
        padding-left: 14px;
        color: #FFFFFF;
    }

    .helpline-flex{
        display:flex;
        align-items: flex-start;
    }

    .helpline-no-text{
        font-size:0.8125rem;
        flex-wrap: wrap;
        font-weight: 700;
        width: 74px;
    }

    .helpline-text{
        font-size:0.8rem;
        font-weight: 700;
    }

    .helpline-no{
        font-weight: 800;
        font-size: 1.75rem;
        margin-top:-5px;
        text-align: center;
    }
`;