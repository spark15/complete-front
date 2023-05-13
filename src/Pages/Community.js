import React from 'react';
import Nav from '../Component/Navbar';
import { useLocation } from 'react-router-dom';
function Community(){
    const location = useLocation();
    const state = location.state.user;
    return(
        <div>
            <Nav user = {state}></Nav>
            <div className='main'>
                    <input type="radio" id="tab-1" name="show" />
                    <input type="radio" id="tab-2" name="show" />
                    <input type="radio" id="tab-3" name="show" />
                    <input type="radio" id="tab-4" name="show" />
                    <div class="tab">
                        <label for="tab-1">Recipe</label>
                        <label for="tab-2">Info</label>
                        <label for="tab-3">Beauty</label>
                        <label for="tab-4">Gallery</label>
                    </div>
                    <div class="content">
                    <div class="content-dis">
                        <div className='recipe'>
                            <p className="cake">🎂 Mini Dog Birthday Cake</p>
                        </div>
                        <div className='recipe'>
                            <p className="homemade">🐶 Homemade Dog Food</p>
                        </div>
                        <div className='recipe'>
                            <p className="treats">🐾 Homemade Dog Treats</p>
                        </div>
                        <div className='recipe'>
                            <p className="cake">🍦 Dog Popsicles</p>
                        </div>
                    </div>
                    <div class="content-dis">
                    Color의 body안 내용을 넣으세요.
                    </div>
                    <div class="content-dis">
                    Textile의 body안 내용을 넣으세요.
                    </div>
                    <div class="content-dis">
                    Design의 body안 내용을 넣으세요.
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Community;