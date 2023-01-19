import React from 'react';
import { Box, Inbox } from './Dialog.style';
import { useNavigate } from "react-router-dom";

const Dialog =({setDialog, party})=> {
    const navigate = useNavigate();

    return (
        <>
            <Box>
                <Inbox>
                    <h3>Confirm your vote to '{party}' for Delhi Elections 2025?</h3>
                    <div className='buttons'>
                        <button type='submit' className='btn' onClick={() => navigate('/thankyou')}>
                            Confirm
                        </button>   
                        <button type='submit' className='btn' onClick={() => setDialog(false)}>
                            Cancel
                        </button>
                    </div>
                </Inbox>
            </Box>
        </>
    );
}

export default Dialog;