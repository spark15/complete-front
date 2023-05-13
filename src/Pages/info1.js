import React from 'react';
import Nav from '../Component/Navbar';
import { useLocation } from 'react-router-dom';
function Info1(){
    const location = useLocation();
    const state = location.state.user;
    return(
        <div>
            <Nav user = {state}/>
                dfdsaf
        </div>
    )
}
export default Info1;