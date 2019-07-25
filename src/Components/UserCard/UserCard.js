import React from 'react';
import Cross from '../../assets/cross.png';
import Circle from '../../assets/circle.png';
import './Usercard.css';

const UserCard = (props) =>{
    return(
        <div className='UserCard'>
            <h1>{props.user}</h1>
            <h4>Your symbol</h4>
            <img src={props.user==='User1'?Cross:Circle} alt="Symbol" />
        </div>
    )
}

export default UserCard