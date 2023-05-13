import React from 'react';
import Nav from '../Component/Navbar';
import { useLocation } from 'react-router-dom';
function Chat(){
    const location = useLocation();
    const state = location.state.user;
    return(
        <div>
            <Nav user = {state}></Nav>
        </div>
    )
}
export default Chat;