import React from 'react';
import { useState } from 'react';
// import Dialog from '../Dialog/Dialog';
import { Box } from './VoteBox.style';
import Web3 from 'web3';
import Election from '../../../build/Election.json'

const VoteBox =({party,candidates,handleInputChange})=> {
    
    return (
        <>
            <Box>
                <i className="material-icons circle blue darken-2">ballot</i>
                <div className='party-name'>
                    <div><b>{candidates.name}</b></div>
                    <div>{candidates.details}</div>
                </div>
                <button id={candidates.id} className='vote-now-button' onClick={handleInputChange}>
                    Vote
                </button>
                {/* {dialog ? <Dialog party={party} setDialog={setDialog} /> : ""} */}
            </Box>
        </>
    );
}

export default VoteBox;