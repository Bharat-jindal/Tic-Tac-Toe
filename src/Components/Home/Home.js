import React from 'react';
import './Home.css';

const Home = (props) =>{
        return(
            <div className="Home">
                <h1>Ready for Game?</h1>

                <div className='ChooseOptions'>
                <h2>Choose One Opion</h2>
                <label><input type='radio' name='playerSelection' value='multiplayer' 
                onChange={props.playerChangeHandler}
                checked={props.player==='multiplayer'} className='Checkbox'/>Multilayer</label>
                <br />
                <label><input type='radio' name='playerSelection' value='computer' 
                onChange={props.playerChangeHandler}
                checked={props.player==='computer'} className='Checkbox'/>Against Computer</label>
                <br /><br />
                <button className='submmitButton' onClick={props.onclick}>Lets's Go</button>
                </div>
            </div>
        )
    }

export default Home;